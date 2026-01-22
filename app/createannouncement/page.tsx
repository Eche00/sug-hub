'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useAnnouncementLogic } from '@/utils/logics/createAnnouncementLogic'
import { useUserInfo } from '@/utils/logics/userLogic'


export default function AnnouncementPage() {
    const { user } = useUserInfo()

    const {
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
    } = useAnnouncementLogic()
    return (
        <div className="m sm:pb-0 pb-12 flex items-center justify-center ">
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
                className="max-w-3xl w-full mx-auto"
            >
                {/* HEADER */}
                <div className="mb-8"> <h1 className="sm:text-3xl text-2xl font-semibold text-gray-900"> New Announcement </h1> <p className="mt-2 text-sm text-gray-500"> Publish updates that will be visible to all students. </p> </div>

                {/* FORM */}
                <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-3xl shadow-sm p-8 space-y-7" >
                    {/* SECTION HEADER */} <div className="pb-4 border-b"> <h2 className="text-lg font-medium text-gray-800"> Announcement Details </h2> </div>
                    {/* AUTHOR */}
                    <div className="relative">
                        <input
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            placeholder="Admin Team"
                            className="peer w-full px-4 pt-6 pb-2 text-sm border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#1B7339]"
                        />
                        <label className="absolute left-4 top-2 text-xs text-gray-500 peer-focus:text-[#1B7339] transition">Author Name</label>
                    </div>

                    {/* TITLE */}
                    <div className="relative">
                        <input
                            type="text"
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            placeholder="Important update"
                            className="peer w-full px-4 pt-6 pb-2 text-sm border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#1B7339]"
                        />
                        <label className="absolute left-4 top-2 text-xs text-gray-500 peer-focus:text-[#1B7339] transition">Announcement Title</label>
                    </div>

                    {/* MESSAGE */}
                    <div className="relative">
                        <textarea
                            rows={5}
                            value={announcement}
                            onChange={e => setAnnouncement(e.target.value)}
                            placeholder="Write your announcement here..."
                            className="peer w-full px-4 pt-6 pb-2 text-sm border border-gray-300 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-[#1B7339]"
                        />
                        <label className="absolute left-4 top-2 text-xs text-gray-500 peer-focus:text-[#1B7339] transition">Announcement Message</label>
                    </div>

                    {/* IMAGE URL */}
                    <div className="relative">
                        <input
                            type="text"
                            value={imageUrl}
                            onChange={e => setImageUrl(e.target.value)}
                            placeholder="https://example.com/image.png"
                            className="peer w-full px-4 pt-6 pb-2 text-sm border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#1B7339]"
                        />
                        <label className="absolute left-4 top-2 text-xs text-gray-500 peer-focus:text-[#1B7339] transition">Image URL (optional)</label>
                    </div>

                    {/* ACTIONS */}
                    <div className="pt-4 border-t flex justify-end gap-3">
                        <button
                            type="button"
                            onClick={() => { setName(user?.firstName || ''); setTitle(''); setAnnouncement(''); setImageUrl(''); }}
                            className="px-5 py-2 rounded-xl text-sm text-green-700 hover:bg-green-100 transition"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            disabled={loading}
                            className="px-6 py-2.5 rounded-xl bg-green-800 text-white text-sm font-medium hover:bg-green-700 transition disabled:opacity-50 cursor-pointer"
                        >
                            {loading ? 'Publishing…' : 'Publish Announcement'}
                        </button>
                    </div>
                </form>
            </motion.div>
        </div>
    )
}
