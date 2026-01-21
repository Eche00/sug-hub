"use client";

import { db } from "@/lib/firebase"
import { arrayUnion, collection, doc, onSnapshot, serverTimestamp, setDoc, Timestamp, updateDoc } from "firebase/firestore"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { useUserInfo } from "./userLogic"
import { useRouter } from "next/navigation";

export interface Announcements {
    id: string
    name: string
    title: string
    announcement: string
    imageUrl: string
    comments: string[]
    createdAt?: Timestamp
}

export const useAnnouncementLogic = () => {
    const { user } = useUserInfo()
    const router = useRouter();

    // Form state
    const [name, setName] = useState(user?.displayName || '')
    const [title, setTitle] = useState('')
    const [announcement, setAnnouncement] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [loading, setLoading] = useState(false)
    const [commentLoading, setCommentLoading] = useState(false)

    // Announcements list
    const [announcements, setAnnouncements] = useState<Announcements[]>([])
    const [loadingAnnouncements, setLoadingAnnouncements] = useState(true)
    // Comment input state
    const [commentText, setCommentText] = useState<string>(''); // shared comment input or you can make per-announcement

    // Fetch announcements in real-time
    useEffect(() => {
        const announcementCol = collection(db, "announcements")

        const unsubscribe = onSnapshot(announcementCol, snapshot => {
            const anns: Announcements[] = []

            snapshot.forEach(docSnap => {
                const data = docSnap.data() as Omit<Announcements, "id">
                anns.push({
                    id: docSnap.id,
                    ...data,
                })
            })

            // Sort by createdAt descending
            const sorted = anns.slice().sort((a, b) => {
                const timeA = a.createdAt?.seconds || 0
                const timeB = b.createdAt?.seconds || 0
                return timeB - timeA
            })

            setAnnouncements(sorted)
            setLoadingAnnouncements(false)
        })

        return () => unsubscribe()
    }, [])

    // Submit new announcement
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!title || !announcement) {
            toast.error('Please fill in both title and message.')
            return
        }

        setLoading(true)

        try {
            const newAnnouncementRef = doc(collection(db, 'announcements'))

            await setDoc(newAnnouncementRef, {
                id: newAnnouncementRef.id,
                name: name || 'Admin',
                title,
                announcement,
                imageUrl: imageUrl || '',
                comments: [],
                createdAt: serverTimestamp()
            })

            toast.success('Announcement published!')
            setTitle('')
            setAnnouncement('')
            setImageUrl('')
        } catch (err) {
            console.error(err)
            toast.error('Failed to publish announcement.')
        } finally {
            setLoading(false)
        }
    }


    // Add comment to a specific announcement
    const handleAddComment = async (announcementId: string, comment: string) => {
        if (!comment) {
            toast.error("Comment can't be empty");
            return;
        }

        const displayName = user?.firstName && user?.lastName
            ? `${user.firstName} ${user.lastName}`
            : 'Anonymous';

        setCommentLoading(true); // start loading

        try {
            const announcementRef = doc(db, "announcements", announcementId);
            await updateDoc(announcementRef, {
                comments: arrayUnion(`${displayName}: ${comment}`)
            });

            toast.success("Comment added!");
            setCommentText(''); // clear input
        } catch (err) {
            console.error(err);
            toast.error("Failed to add comment");
        } finally {
            setCommentLoading(false); // stop loading
        }
    };
    const viewAnnouncements = async (announcementsId: string) => {
        router.push(`/announcement/${announcementsId}`);
    }

    const handleShare = (announcementId: string, title: string, text: string) => {
        const shareUrl = `${window.location.origin}/announcement/${announcementId}`;

        if (navigator.share) {
            navigator.share({
                url: shareUrl,
            }).catch(err => console.error("Share cancelled", err));
        } else {
            // Fallback: copy link
            navigator.clipboard.writeText(shareUrl);
            toast.success("Link copied to clipboard!");
        }
    };

    return {
        name,
        setName,
        title,
        setTitle,
        announcement,
        setAnnouncement,
        imageUrl,
        setImageUrl,
        loading,
        handleSubmit,
        announcements,
        loadingAnnouncements, handleAddComment, commentText, setCommentText, commentLoading, viewAnnouncements, handleShare
    }
}
