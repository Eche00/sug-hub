import { db } from "@/lib/firebase"
import { log } from "console"
import { collection, doc, onSnapshot, serverTimestamp, setDoc, Timestamp, updateDoc, increment, arrayUnion, arrayRemove } from "firebase/firestore"

import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { useUserInfo } from "./userLogic"
import html2canvas from "html2canvas"



interface Message {
    id: string;
    title: string;
    message: string;
    category: string;
    likes: number;
    dislikes: number;
    likedBy: string[];
    dislikedBy: string[];
    createdAt?: Timestamp;
}


export const anonymousMessageLogic = () => {
    const { user } = useUserInfo()
    const [addMessage, setAddMessage] = useState<boolean>(false)
    const [title, setTitle] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const maxChars: number = 100
    const [category, setCategory] = useState<string>('General'); // default category
    const [loadingMessages, setLoadingMessages] = useState<boolean>(true);
    const [messages, setMessages] = useState<Array<Message>>([])


    useEffect(() => {
        const messageCol = collection(db, "anonymousMessages");

        const unsubscribe = onSnapshot(messageCol, (snapshot) => {
            const msgs: Message[] = [];

            snapshot.forEach((docSnap) => {
                const data = docSnap.data() as Omit<Message, "id">;

                msgs.push({
                    id: docSnap.id,
                    ...data,
                });
            });


            const msgSorted = msgs
                .slice()
                .sort((a, b) => {
                    const timeA = a.createdAt?.seconds || 0;
                    const timeB = b.createdAt?.seconds || 0;
                    return timeB - timeA;
                });

            setMessages(msgSorted);
            setLoadingMessages(false);

        });

        return () => unsubscribe();
    }, []);



    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!title || !message) {
            toast.error('Please fill in both title and message.');
            return;
        }

        try {
            // Use Firestore to auto-generate a unique ID
            const newMessageRef = doc(collection(db, 'anonymousMessages'));

            await setDoc(newMessageRef, {
                title,
                message,
                category,           // the school/category selection
                likes: 0,           // initialize likes count
                dislikes: 0,        // initialize dislikes count
                likedBy: [],        // array to track who liked it
                dislikedBy: [],     // optional: track who disliked it
                createdAt: serverTimestamp(), // timestamp
            });


            toast.success('Message sent successfully!');
        } catch (error) {
            console.error('Error saving message:', error);
            toast.error('Error occurred while sending message');
        } finally {
            // Reset form
            setTitle('');
            setMessage('');
        }
    };

    const userId = user.uid; // later replace with auth uid

    const handleLike = async (card: Message) => {
        if (!userId) {
            toast.error('Sign in to like or react to posts')
            return;
        }
        const ref = doc(db, "anonymousMessages", card.id);

        if (card.likedBy?.includes(userId)) return;

        await updateDoc(ref, {
            likes: increment(1),
            likedBy: arrayUnion(userId),
            dislikedBy: arrayRemove(userId),
            dislikes: card.dislikedBy?.includes(userId) ? increment(-1) : increment(0),
        });
    };

    const handleDislike = async (card: Message) => {
        if (!userId) {
            toast.error('Sign in to like or react to posts')
            return;
        }
        const ref = doc(db, "anonymousMessages", card.id);

        if (card.dislikedBy?.includes(userId)) return;

        await updateDoc(ref, {
            dislikes: increment(1),
            dislikedBy: arrayUnion(userId),
            likedBy: arrayRemove(userId),
            likes: card.likedBy?.includes(userId) ? increment(-1) : increment(0),
        });
    };




    const takeScreenshot = async () => {
        const element = document.body;

        const canvas = await html2canvas(element, {
            useCORS: true,
            scale: 2, // sharper image
        });

        const image = canvas.toDataURL("image/png");

        // Download image
        const link = document.createElement("a");
        link.href = image;
        link.download = "screenshot.png";
        link.click();
    };


    return { loadingMessages, category, setCategory, messages, addMessage, setAddMessage, title, setTitle, message, setMessage, maxChars, handleSubmit, handleLike, handleDislike, takeScreenshot };
}