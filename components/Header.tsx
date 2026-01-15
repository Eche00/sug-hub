import { Search } from '@mui/icons-material'
import React from 'react'

function Header() {
    return (
        <div className='bg-white sm:py-4 py-5 flex md:sticky fixed top-0 left-0 w-full'>
            {/* Logo Section  */}
            <div className="md:hidden flex items-center relative">
                <span className="flex items-center w-full rounded-lg px-4 text-[16px] font-extrabold text-[#1B7339] tracking-wide">
                    <span className='text-[#1B7339]  border-2 border-[#1B7339] rounded-full p-3 mr-1 w-8 h-8 flex items-center justify-center'>𝓢</span>
                    <p className="text-black  ">UG.</p>HUB
                </span>
            </div>
            <div className='flex flex-1/3 border-2 border-gray-400 rounded-lg py-2 px-4'> <input type="text" placeholder='Search...' className='flex flex-1 outline-none' /> <Search /></div>
            <div className='hidden md:flex flex-1 '></div>
        </div>
    )
}

export default Header