'use client'


import EventsCta from '@/components/EventsCta'
import AnonymousMessageModal from '@/components/ui/AnonymousMessageModal'
import { anonymousMessageLogic } from '@/utils/logics/anonymousMessageLogic'
import { Bookmark, Camera } from '@mui/icons-material'
import { motion } from 'framer-motion'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { useUserInfo } from '@/utils/logics/userLogic'
import Loader from '@/components/ui/Loader'

function page() {
    const { loadingMessages, messages, addMessage, setAddMessage, handleLike, handleDislike, takeScreenshot } = anonymousMessageLogic()
    const { user } = useUserInfo()



    return (
        <div>
            <title>Student Voice | SUG Hub</title>
            <meta name="description" content="Engage with the student community through our Student Voice platform. Share your thoughts, ideas, and feedback to help shape a better campus experience for everyone." />


            {/* Student voice modal */}
            {addMessage && (
                <AnonymousMessageModal addMessage={addMessage} setAddMessage={setAddMessage} />
            )}




            <section className='flex gap-8 '>
                <div className=" flex flex-1 w-full  ">
                    {/* Card Stack */}
                    <div className="  flex flex-col gap-4  items-center justify-center h-fit w-full lg:pb-0 pb-22 ">
                        {/* Card Stack */}
                        {loadingMessages || messages.length < 1 ? <Loader /> : messages.map((card, index) => (
                            <motion.div
                                key={index}
                                className=" bg-white rounded-3xl p-6  overflow-y-auto max-w-100  w-full"
                            >
                                {/* Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center " >S</div>
                                    <div className="flex-1">
                                        <p className="text-sm font-semibold text-gray-900">Student</p>
                                        <p className="text-xs text-gray-400">{card.createdAt ? card.createdAt.toDate().toLocaleString() : "No date"}</p>
                                    </div>
                                    {/* later  */}
                                    <button
                                    // onClick={takeScreenshot}
                                    >
                                        <Bookmark className="text-gray-400" fontSize="small" />

                                    </button>
                                </div>


                                {/* Main Content (only for top card) */}
                                <section className=' w-full'>
                                    <h3 className="text-lg font-semibold leading-snug mb-3">
                                        {card.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                                        {card.message}
                                    </p>


                                    {/* Category */}
                                    <p className="bg-[#1B7339]/10 rounded-xl p-3 text-center text-[#1B7339] font-semibold w-full mb-2">
                                        {card.category}
                                    </p>

                                    {/* Like / Dislike */}
                                    <div className="flex items-center justify-end gap-3 ">
                                        {/* LIKE */}
                                        <button
                                            onClick={() => handleLike(card)}
                                            className={`
      group flex items-center gap-2 px-3 py-1.5 rounded-full
      border text-sm font-medium transition-all duration-200 cursor-pointer
      ${card.likedBy?.includes(user.uid)
                                                    ? "bg-green-100 text-[#1B7339] border-green-200"
                                                    : "bg-white text-gray-600 border-gray-200 hover:border-green-300 hover:text-green-600"
                                                }
      active:scale-95
    `}
                                        >
                                            <ThumbUpIcon
                                                fontSize="small"
                                                className={`transition ${card.likedBy?.includes(user.uid) ? "scale-110" : "group-hover:scale-110"
                                                    }`}
                                            />
                                            <span>{card.likes}</span>
                                        </button>

                                        {/* DISLIKE */}
                                        <button
                                            onClick={() => handleDislike(card)}
                                            className={`
      group flex items-center gap-2 px-3 py-1.5 rounded-full
      border text-sm font-medium transition-all duration-200 cursor-pointer
      ${card.dislikedBy?.includes(user.uid)
                                                    ? "bg-red-100 text-red-600 border-red-200"
                                                    : "bg-white text-gray-600 border-gray-200 hover:border-red-300 hover:text-red-500"
                                                }
      active:scale-95
    `}
                                        >
                                            <ThumbDownIcon
                                                fontSize="small"
                                                className={`transition ${card.dislikedBy?.includes(user.uid) ? "scale-110" : "group-hover:scale-110"
                                                    }`}
                                            />
                                            <span>{card.dislikes}</span>
                                        </button>
                                    </div>




                                </section>
                            </motion.div>
                        ))}
                    </div>
                </div>
                <EventsCta />
                {!addMessage && <button className="fixed sm:top-20 top-23 sm:right-8 right-1 w-10 h-10 rounded-full bg-[#1B7339] text-white shadow flex items-center justify-center text-xl cursor-pointer" onClick={() => setAddMessage(!addMessage)}>
                    +
                </button>}
            </section>
        </div>
    )
}

export default page
