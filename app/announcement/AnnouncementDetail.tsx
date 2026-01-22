"use client";

import Loader from '@/components/ui/Loader'
import { useAnnouncementLogic } from '@/utils/logics/createAnnouncementLogic'
import { useUserInfo } from '@/utils/logics/userLogic';
import { ArrowOutward, Attribution, Send, Share } from '@mui/icons-material'

function AnnouncementDetail() {
    const { user } = useUserInfo()
    const {
        announcements,
        handleAddComment, commentText, setCommentText, commentLoading, viewAnnouncements, handleShare
    } = useAnnouncementLogic()
    return (
        <div className=" flex flex-col gap-8 justify-center ">
            {announcements.map((announcement: any, index: number) => (<div className="w-full  bg-white rounded-2xl relative" key={index}>
                <button className='absolute top-5 right-5 cursor-pointer hover:text-[#1B7339]' onClick={() =>
                    handleShare(
                        announcement.id,
                        announcement.title,
                        announcement.announcement
                    )
                }><Share fontSize='small' /></button>
                {/* Header  */}
                <div className="flex items-center gap-3 p-4">
                    <img src="/logo.png" alt="" className="w-10 h-10 rounded-full bg-white border-2 border-green-800 object-cover" />
                    <div>
                        <p className="font-semibold text-sm">{announcement.name}</p>
                        <p className="text-xs text-gray-500">{announcement.createdAt ? announcement.createdAt.toDate().toLocaleString() : "No date"}</p>
                    </div>
                </div>

                {/* Content  */}
                <h2 className="px-4 pb-1 text-sm font-extrabold text-gray-900">
                    {announcement.title}
                </h2>
                <p className="px-4 mb-3 text-sm text-gray-800 line-clamp-2 cursor-pointer " onClick={() => viewAnnouncements(announcement.id)}>
                    {announcement.announcement}
                </p>

                {/* Image  */}
                <div className=" overflow-hidden w-[95%] mx-auto h-64 bg-gray-200 flex items-center justify-center rounded-2xl">
                    <img src={announcement.imageUrl} alt="" className='w-full h-full object-cover cursor-pointer hover:scale-[102%] duration-300' onClick={() => viewAnnouncements(announcement.id)} />
                </div>

                {/* Actions  */}
                <div className="flex items-center justify-between  mx-4 py-2 border-b border-gray-200 text-sm text-gray-600 b sm:gap-8 gap-4">
                    <p className="font-semibold text-sm">Comments</p>
                    <p className="text-xs text-gray-500 cursor-pointer hover:text-[#1B7339]" onClick={() => viewAnnouncements(announcement.id)}>{announcement.comments.length} comments <span className=' cursor-pointer'><ArrowOutward fontSize='small' /></span></p>

                </div>
                {/* Actions  */}
                <div className="flex  px-4 py-3 text-sm text-gray-600 b sm:gap-8 gap-4">

                    {user?.email ? <p className="sm:w-12.5 sm:h-12.5 w-10 h-10 rounded-full bg-black text-white border-2 border-[#1B7339] flex items-center justify-center">{user?.firstName.slice(0, 1)}</p> : <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center"><Attribution /></div>}

                    <input type="text" placeholder='Drop a comment...' className='flex flex-1 outline-none  bg-gray-200 rounded-lg py-2 px-4 min-w-2' value={commentText}
                        onChange={e => setCommentText(e.target.value)} />  <button className=' text-white bg-[#1B7339] py-2 px-4 rounded-lg cursor-pointer' onClick={() => handleAddComment(announcement.id, commentText)} disabled={commentLoading}>
                        {commentLoading ? <div className="flex items-center justify-center">
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        </div> : <Send />}</button>

                </div>

            </div>
            ))}
        </div>

    )
}

export default AnnouncementDetail