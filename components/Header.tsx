import { Search } from '@mui/icons-material'
import React from 'react'

function Header() {
    return (
        <div className='bg-white py-4 flex fixed top-0 left-0 w-full z-10 shadow-sm'>
            {/* Logo Section for mobile */}
            <div className="md:hidden flex items-center ml-4">
                <span className="flex items-center rounded-lg px-2 text-[16px] font-extrabold text-[#1B7339] tracking-wide">
                    <span className='text-[#1B7339] border-2 border-[#1B7339] rounded-full p-2 mr-2 w-8 h-8 flex items-center justify-center'>𝓢</span>
                    <p className="text-black">UG.</p>HUB
                </span>
            </div>
            
            {/* Logo Section for desktop - hidden on mobile */}
            <div className="hidden md:flex items-center ml-6 w-1/4">
                <span className="flex items-center text-[18px] font-extrabold text-[#1B7339] tracking-wide">
                    <span className='text-[#1B7339] border-2 border-[#1B7339] rounded-full p-3 mr-3 w-10 h-10 flex items-center justify-center'>𝓢</span>
                    <p className="text-black">UG.</p>HUB
                </span>
            </div>
            
            {/* Search Bar - centered and responsive */}
            <div className='flex flex-1 justify-center mx-4'>
                <div className='flex w-full max-w-2xl border-2 border-gray-300 rounded-lg py-2 px-4 bg-white'>
                    <input 
                        type="text" 
                        placeholder='Search...' 
                        className='flex flex-1 outline-none bg-transparent' 
                    />
                    <Search />
                </div>
            </div>
            
            {/* Spacer for desktop layout */}
            <div className='hidden md:flex w-1/4'></div>
        </div>
    )
}
export default Header