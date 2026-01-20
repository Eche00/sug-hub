'use client'


import EventsCta from '@/components/EventsCta'
import { Attribution, Send, Camera, Close } from '@mui/icons-material'
import { motion } from 'framer-motion'
import { useState } from 'react'

const cards = [
    {
        title: 'Social media post',
        subtitle: 'Created on May 21',
        bodyTitle: "I’m committing to No-Buy 2025 — I was tired of spending mindlessly",
        body: "If you’ve ever felt like shopping was just a reflex, this challenge might be for you. No more late-night cart-filling. Just intentional choices, one day at a time. Who’s in with me?",
        tag: 'smart consumption.',
    },
    {
        title: 'Finance note',
        subtitle: 'Planned collaboration',
    },
    {
        title: 'Finance note',
        subtitle: 'Planned collaboration',
    },
    {
        title: 'Finance note',
        subtitle: 'Planned collaboration',
    },
    {
        title: 'Finance note',
        subtitle: 'Planned collaboration',
    },
    {
        title: 'Finance note',
        subtitle: 'Planned collaboration',
    },
    {
        title: 'Finance note',
        subtitle: 'Planned collaboration',
    },
    {
        title: 'Finance note',
        subtitle: 'Planned collaboration',
    },
    {
        title: 'Finance note',
        subtitle: 'Planned collaboration',
    },
    {
        title: 'Finance note',
        subtitle: 'Planned collaboration',
    },
    {
        title: 'Pinned thought',
        subtitle: 'Reflection',
    },
]
function page() {
    const [addMessage, setAddMessage] = useState<boolean>(false)
    const [title, setTitle] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const maxChars: number = 100

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!title || !message) {
            alert('Please fill in both title and message.')
            return
        }

        // Example: replace this with actual submission logic
        console.log('Submitted:', { title, message })

        // Reset form
        setTitle('')
        setMessage('')
    }

    return (
        <div>
            <title>Student Voice | SUG Hub</title>
            <meta name="description" content="Engage with the student community through our Student Voice platform. Share your thoughts, ideas, and feedback to help shape a better campus experience for everyone." />


            {/* Student voice modal */}
            {addMessage && (
                <section className=' fixed top-0 left-0 w-full h-screen bg-black/80 flex sm:items-center am:justify-center'>
                    <div className='fixed top-0 left-0  w-full h-16 bg-white'></div>
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white rounded-2xl sm:p-6 p-4 mb-6 sm:max-w-125 max-w-full w-full mx-auto h-fit mt-13 sm:mt-0 "
                    >
                        <h2 className="text-xl font-bold mb-4 flex items-center justify-between">Student Voice
                            <button className=" w-8 h-8 rounded-full text-gray-400  flex items-center justify-center text-xl cursor-pointer" onClick={() => setAddMessage(!addMessage)}>
                                <Close fontSize='small' />
                            </button>
                        </h2>

                        {/* Title Input */}
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-1" htmlFor="title">
                                Title
                            </label>
                            <input
                                id="title"
                                type="text"
                                placeholder="Enter a title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="w-full outline-none bg-gray-200 rounded-lg py-2 px-4"
                            />
                        </div>

                        {/* Message Input */}
                        <div className="mb-2">
                            <label
                                className=" text-gray-700 font-medium mb-2 flex items-baseline gap-2"
                                htmlFor="message"
                            >
                                <span className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                                    <Attribution />
                                </span>  Message
                            </label>
                            <div className="flex gap-4">

                                <textarea
                                    id="message"
                                    placeholder="Speak your mind..."
                                    value={message}
                                    onChange={(e) =>
                                        e.target.value.length <= maxChars && setMessage(e.target.value)
                                    }
                                    className="flex-1 outline-none bg-gray-200 rounded-lg py-2 px-4 resize-none"
                                    rows={3}
                                />

                            </div>

                        </div>

                        {/* Character count & submit button */}
                        <div className='flex items-center justify-between'>
                            <p
                                className={`text-sm mt-1 ${message.length === maxChars ? 'text-red-500' : 'text-gray-400'
                                    }`}
                            >
                                {message.length}/{maxChars} characters
                            </p>
                            <button
                                type="submit"
                                className="text-white bg-[#1B7339] py-2 px-4 rounded-lg cursor-pointer"
                            >
                                <Send />
                            </button>
                        </div>
                    </form>
                </section>
            )}




            <section className='flex gap-8 '>
                <div className=" flex flex-1 w-full sm:h-[90vh]  overflow-scroll ">
                    {/* Card Stack */}
                    <div className="  flex flex-col gap-4 lg:items-start items-center justify-center h-fit w-full lg:pb-0 pb-22 ">
                        {/* Card Stack */}
                        {cards.map((card, index) => (
                            <motion.div
                                key={index}
                                className=" bg-white rounded-3xl p-6  overflow-y-auto max-w-100  w-full"
                            >
                                {/* Header */}
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-gray-300" />
                                    <div className="flex-1">
                                        <p className="text-sm font-semibold text-gray-900">{card.title}</p>
                                        <p className="text-xs text-gray-400">{card.subtitle}</p>
                                    </div>
                                    <Camera className="text-gray-400" fontSize="small" />
                                </div>


                                {/* Main Content (only for top card) */}
                                <>
                                    <h3 className="text-lg font-semibold leading-snug mb-3">
                                        {card.bodyTitle}
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                                        {card.body}
                                    </p>


                                    <div className="bg-gray-100 rounded-xl p-4 text-center text-pink-600 font-semibold">
                                        {card.tag}
                                    </div>



                                </>
                            </motion.div>
                        ))}
                    </div>
                </div>
                <EventsCta />
                {!addMessage && <button className="fixed sm:top-20 top-23 sm:right-8 right-1 w-10 h-10 rounded-full bg-[#1B7339] text-white shadow flex items-center justify-center text-xl " onClick={() => setAddMessage(!addMessage)}>
                    +
                </button>}
            </section>
        </div>
    )
}

export default page
