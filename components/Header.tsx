'use client'
import { useUserInfo } from '@/utils/logics/userLogic'
import { Search } from '@mui/icons-material'
import Link from 'next/link'

function Header() {
    const { user, loading } = useUserInfo()
    return (
        <div className='bg-white sm:py-3 py-2  fixed top-0 left-0 md:left-67.5 right-0 z-10  '>

            {/* container  */}
            <section className='flex items-center justify-center gap-2 w-[95%] mx-auto'>

                {/* Logo Section for desktop -  mobile */}
                <div className="md:hidden flex  items-center  md:w-1/4">
                    <Link href='/' className=' border-2 border-[#1B7339] rounded-full p-2 mr-2 flex items-center justify-center'><img src="/logo.png" alt="" className=' w-8 h-8 object-cover' /></Link>
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
                {loading ? <div className="flex flex-1 items-center justify-end">
                    <div className="sm:w-12.5 sm:h-12.5 w-10 h-10 border-3 border-[#1B7339] border-t-transparent rounded-full animate-spin"></div>
                </div> : user?.email ?
                    <div className="flex flex-1 items-end justify-end gap-2 ">
                        <p className="  text-gray-800 text-[12px] font-bold flex flex-col items-end">{user.firstName} <span className=' text-gray-400 text-[10px] font-bold '>{user.type}</span></p>
                        <Link href="/profile" className="sm:w-12.5 sm:h-12.5 w-10 h-10 rounded-full bg-black text-white border-2 border-[#1B7339] flex items-center justify-center cursor-pointer">{user.firstName.slice(0, 1)}</Link>

                    </div> :
                    <div className="flex flex-1 items-center justify-end gap-5 md:pl-2 ">
                        <Link href="/login" className=' text-white bg-[#1B7339] hover:bg-[#1B7339]/90 font-bold  sm:py-2 py-1.5 sm:px-7 px-3 rounded-lg cursor-pointer w-fit'>Register</Link>
                    </div>}
            </section>
        </div>
    )
}

export default Header