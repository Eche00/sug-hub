import React from 'react'
import { LocalActivityOutlined, Message, SendTimeExtension } from '@mui/icons-material'
import Link from 'next/link'

const events = [
    {
        title: 'The Top Healthcare Events & Conferences of 2023',
        time: '6 hours',
        avatars: 4,
    },
    {
        title: 'Virtual Health Care Congress (VHC2023)',
        time: '10 hours',
        avatars: 4,
    },
    {
        title: 'Digital Health & Personalized Medicine Conference – Barcelona, Spain',
        time: '2 days',
        avatars: 4,
    },
]
const Anonymousmsg = [

    {
        title: 'Virtual Health Care Congress (VHC2023)',
        time: '10 hours',
        avatars: 4,
    },

]

function EventsCta() {
    return (
        <div className='hidden lg:flex flex-1 bg-white rounded-lg h-fit p-5 flex-col shadow-sm overflow-scroll'>
            <div className='flex items-center justify-between mb-4'>
                <h2 className='text-lg font-semibold text-gray-900'>Recent Events 2023</h2>
                <SendTimeExtension className='w-5 h-5 text-gray-400 cursor-pointer' />
            </div>
            {/* Recent events posted  */}
            <div className='flex flex-col gap-4 border-b border-gray-200 pb-4'>
                {events.map((event, index) => (
                    <div
                        key={index}
                        className='flex items-start justify-between gap-3 p-3 rounded-md hover:bg-gray-50 transition'
                    >
                        <div className='flex items-start gap-3'>
                            <div className='w-10 h-10 rounded-md bg-green-100 flex items-center justify-center'>
                                <div className='w-6 h-6 bg-green-500 rounded-sm flex items-center justify-center' ><LocalActivityOutlined className='w-5 h-5 text-white cursor-pointer' /></div>
                            </div>

                            <div>
                                <p className='text-sm font-medium text-gray-900 leading-snug'>
                                    {event.title}
                                </p>
                                <span className='text-xs text-gray-400'>{event.time}</span>
                            </div>
                        </div>

                        <div className='flex -space-x-2'>
                            {Array.from({ length: event.avatars }).map((_, i) => (
                                <div
                                    key={i}
                                    className='w-6 h-6 rounded-full bg-gray-200 border-2 border-white'
                                />
                            ))}
                        </div>
                    </div>
                ))}
                <Link href="/events" className=' text-white bg-[#1B7339] hover:bg-[#1B7339]/90 font-bold  py-2 px-7 rounded-lg cursor-pointer w-fit mx-3'>View Events</Link>
            </div>
            {/* Recent Aonymous message  */}
            <div className='flex flex-col gap-4 '>
                {Anonymousmsg.map((event, index) => (
                    <div
                        key={index}
                        className='flex items-start justify-between gap-3 p-3 rounded-md hover:bg-gray-50 transition'
                    >
                        <div className='flex items-start gap-3'>
                            <div className='w-10 h-10 rounded-md bg-green-100 flex items-center justify-center'>
                                <div className='w-6 h-6 bg-green-500 rounded-sm flex items-center justify-center' ><Message className='w-5 h-5 text-white cursor-pointer' /></div>
                            </div>

                            <div>
                                <p className='text-sm font-medium text-gray-900 leading-snug'>
                                    {event.title}
                                </p>
                                <span className='text-xs text-gray-400'>{event.time}</span>
                            </div>
                        </div>

                        <div className='flex -space-x-2'>
                            {Array.from({ length: event.avatars }).map((_, i) => (
                                <div
                                    key={i}
                                    className='w-6 h-6 rounded-full bg-gray-200 border-2 border-white'
                                />
                            ))}

                        </div>
                    </div>
                ))}
                <Link href="/studentvoice" className=' text-white bg-[#1B7339] hover:bg-[#1B7339]/90 font-bold  py-2 px-7 rounded-lg cursor-pointer w-fit mx-3'>View Messages</Link>

            </div>
        </div>
    )
}

export default EventsCta
