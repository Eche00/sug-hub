import React from 'react'
import { Attribution, Send, Close } from '@mui/icons-material'
import { anonymousMessageLogic } from '@/utils/logics/anonymousMessageLogic';

interface AnonymousMessageModalProps {
    addMessage: boolean;
    setAddMessage: React.Dispatch<React.SetStateAction<boolean>>;
}

function AnonymousMessageModal({ addMessage, setAddMessage }: AnonymousMessageModalProps) {
    const { category, setCategory, title, setTitle, message, setMessage, maxChars, handleSubmit } = anonymousMessageLogic()

    return (
        <section className='z-50 fixed top-0 left-0 w-full h-screen bg-black/80 flex sm:items-center am:justify-center'>
            <div className='fixed top-0 left-0  w-full h-16 bg-white'></div>
            <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl sm:p-6 p-4 mb-6 sm:max-w-125 max-w-full w-full mx-auto h-fit mt-13 sm:mt-0 "
            >
                <h2 className="text-xl font-bold mb-4 flex items-center justify-between">Student Voice
                    <button type='button' className=" w-8 h-8 rounded-full text-gray-400  flex items-center justify-center text-xl cursor-pointer" onClick={() => setAddMessage(!addMessage)}>
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
                <div className="mb-4">
                    <label
                        className="text-gray-700 font-medium mb-1 flex items-center gap-2"
                        htmlFor="category"
                    >
                        Category
                    </label>

                    <select
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full bg-gray-200 rounded-lg py-2 px-4 outline-none"
                    >
                        <option value="Academics">Academics</option>
                        <option value="Events">Events</option>
                        <option value="Facilities">Facilities</option>
                        <option value="Clubs">Clubs</option>
                        <option value="General">General</option>
                    </select>
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
    )
}

export default AnonymousMessageModal