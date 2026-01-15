import React from 'react'
import Events from './Events'

function page() {
    return (
        <div>
            <title>Events | SUG Activities & Programs</title>
            <meta name="description" content="Explore upcoming and past Student Union Government events, programs, and activities for students throughout the academic year." />
            <div className="bg-white rounded-2xl p-6 mb-6">
                <h2 className="text-2xl font-bold mb-4">School Events </h2>

                {/* Category Buttons */}
                <div className="flex flex-wrap gap-3">
                    <button className="w-30 h-10 rounded-full text-sm font-medium bg-[#1B7339] text-white">
                        Academic
                    </button>
                    <button className="w-30 h-10 rounded-full text-sm font-medium border border-[#1B7339] text-[#1B7339] cursor-pointer hover:scale-[102%] duration-300">
                        Matches
                    </button>
                    <button className="w-30 h-10 px-5 rounded-full text-sm font-medium border border-[#1B7339] text-[#1B7339] cursor-pointer hover:scale-[1.02] duration-300">
                        Health
                    </button>

                    <button className="w-30 h-10 px-5 rounded-full text-sm font-medium border border-[#1B7339] text-[#1B7339] cursor-pointer hover:scale-[1.02] duration-300">
                        Notices
                    </button>
                </div>

            </div>

            <section className='flex gap-8'>
                <Events />
            </section>
        </div>
    )
}

export default page