'use client'
import { useUserInfo } from '@/utils/logics/userLogic'
import { Search, SupportAgent } from '@mui/icons-material'
import Link from 'next/link'

function Header() {
    const { user } = useUserInfo()
    return (
        <div className='bg-white py-3  fixed top-0 left-0 md:left-67.5 right-0 z-10  '>

            {/* container  */}
            <section className='flex items-center justify-center gap-2 w-[95%] mx-auto'>

                {/* Logo Section for desktop -  mobile */}
                <div className="md:hidden flex  items-center  md:w-1/4">
                    <span className="flex items-center text-[18px] font-extrabold text-[#1B7339] tracking-wide">
                        <span className='text-[#1B7339] border-2 border-[#1B7339] rounded-full p-3 sm:mr-3 mr-1 md:w-10 w-8 md:h-10 h-8 flex items-center justify-center'>𝓢</span>
                        <p className="text-black">UG.</p>HUB
                    </span>
                </div>

                {/* Search Bar - centered and responsive */}
                <div className='flex md:flex-1 justify-center '>
                    <div className='flex w-full max-w-2xl border-2 border-gray-300 rounded-lg py-2 px-4 bg-white'>
                        <input
                            type="text"
                            placeholder='Search...'
                            className='md:flex hidden flex-1 outline-none bg-transparent '
                        />
                        <Search />
                    </div>
                </div>

                {/* auth button  */}
                {user?.username ?
                    <div className="flex flex-1 items-end justify-end gap-2.5 md:pl-2 ">
                        <p className="w-12.5 h-12.5 rounded-full bg-black border-2 border-[#008CFF] flex items-center justify-center">{user?.username?.slice(0, 1)}</p> <div className="flex flex-col gap-1">
                            <Link href='/' className=" shadow-sm text-gray-400 text-[12px] font-bold cursor-pointer hover:underline">Dashboard</Link>
                        </div>
                    </div> :
                    <div className="flex flex-1 items-center justify-end gap-5 md:pl-2 ">
                        <Link href="/login" className=' text-white bg-[#1B7339] hover:bg-[#1B7339]/90 font-bold  sm:py-2 py-1.5 sm:px-7 px-3 rounded-lg cursor-pointer w-fit'>Register</Link>
                    </div>}
            </section>
        </div>
    )
}

export default Header