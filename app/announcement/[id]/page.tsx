'use client'

import React, { useEffect, useState } from 'react'
import { ArrowOutward, Attribution, Send, Share } from '@mui/icons-material'
import { useParams } from 'next/navigation';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import Loader from '@/components/ui/Loader';
import { useUserInfo } from '@/utils/logics/userLogic';
import { useAnnouncementLogic } from '@/utils/logics/createAnnouncementLogic';

function page() {
    const { user } = useUserInfo()
    const params = useParams();
    const announcementId: any = params.id;
    const [announcement, setAnnouncement] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const { handleShare } = useAnnouncementLogic()
    useEffect(() => {
        const fetchAnnouncement = async () => {
            setLoading(true);
            const docRef = doc(db, 'announcements', announcementId);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setAnnouncement(docSnap.data());
            }
            setLoading(false);
        };

        fetchAnnouncement();
    }, [announcementId]);

    if (loading || !announcement) return <Loader />;

    return (
        <div className="w-full  mx-auto sm:mb-0 mb-22">

            {/* Announcement Card */}
            <div className="bg-white rounded-2xl relative cursor-pointer hover:text">
                <button className="absolute top-5 right-5 cursor-pointer hover:text-[#1B7339]" onClick={() =>
                    handleShare(
                        announcement.id,
                        announcement.title,
                        announcement.announcement
                    )
                }>
                    <Share fontSize="small" />
                </button>

                {/* Header */}
                <div className="flex items-center gap-3 p-4">
                    <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/new-year-background-736885_1280.jpg" alt="" className="w-10 h-10 rounded-full bg-gray-300 object-cover" />
                    <div>
                        <p className="font-semibold text-sm">{announcement.name}</p>
                        <p className="text-xs text-gray-500">Aug 12, 2026 · 6:40 PM</p>
                    </div>
                </div>

                {/* Content */}
                <div className="px-4 pb-3 text-sm text-gray-800">{announcement.createdAt?.toDate().toLocaleString()}
                </div>
                <p className="px-4 pb-3 text-sm text-gray-800" >
                    {announcement.announcement}
                </p>
                {/* Image */}
                <div className="overflow-hidden w-[95%] mx-auto h-64 bg-gray-200 rounded-2xl">
                    <img
                        src={announcement.imageUrl}
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Comments Header */}
                <div className="flex items-center justify-between mx-4 py-3 border-b text-sm text-gray-600">
                    <p className="font-semibold">Comments</p>
                    <p className="text-xs text-gray-500">
                        {announcement.comments?.length || 0} comments <ArrowOutward fontSize="small" />
                    </p>
                </div>

                {/* Scrollable Comments */}
                <div className="max-h-72 overflow-y-auto px-4 py-2 space-y-4">
                    {announcement.comments?.map((comment: string, index: number) => (
                        <div key={index} className="flex gap-3">
                            <p className=" w-8 h-8 rounded-full bg-black text-white border-2 border-[#1B7339] flex items-center justify-center">{comment?.slice(0, 1)}</p>
                            <div className="bg-gray-100 rounded-xl px-4 py-2 text-sm">

                                <p className="text-gray-700">
                                    {comment}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Comment Input */}
                <div className="flex px-4 py-3 gap-4 border-t">
                    {user.email ? <p className="sm:w-12.5 sm:h-12.5 w-10 h-10 rounded-full bg-black text-white border-2 border-[#1B7339] flex items-center justify-center">{user.firstName.slice(0, 1)}</p> : <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center"><Attribution /></div>}

                    <input
                        type="text"
                        placeholder="Drop a comment..."
                        className="flex-1 outline-none bg-gray-200 rounded-lg py-2 px-4"
                    />

                    <button className="text-white bg-[#1B7339] py-2 px-4 rounded-lg">
                        <Send />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default page
