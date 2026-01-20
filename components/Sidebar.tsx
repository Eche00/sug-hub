'use client';

import { useUserInfo } from '@/utils/logics/userLogic';
import Link from 'next/link';
import { usePathname } from 'next/navigation';




function Sidebar() {
    const pathname = usePathname()
    const { user, loading, handleLogOutUser } = useUserInfo()

    // Sidebar Nav 
    const sideBarItems = [
        { name: "Home", link: '/', icon: 'home' },
        { name: "About", link: '/about', icon: 'info' },
        { name: "Events", link: '/events', icon: 'calendar' },
        { name: "Excos", link: '/excos', icon: 'people' },
        { name: "Student Voice", link: '/studentvoice', icon: 'speak' },
    ];


    return (
        <div className="bg-white fixed top-0 left-0 w-67.5 h-screen flex flex-col  py-5 gap-10">
            {/* lSidebar Container */}
            <section className="w-[80%] mx-auto flex flex-col gap-2">
                {/* Logo Section  */}
                <div className="flex items-center relative pb-6">
                    <span className="flex items-center w-full rounded-lg px-4 text-2xl font-extrabold text-[#1B7339] tracking-wide">
                        <span className='text-[#1B7339] text-2xl border-2 border-[#1B7339] rounded-full p-3 mr-1 w-12 h-12 flex items-center justify-center'>𝓢</span>
                        <p className="text-black  ">UG.</p>HUB
                    </span>
                </div>

                {/* Link Section  */}
                {sideBarItems.map((item) =>
                    <Link href={item.link} key={item.name} className={pathname === item.link ? 'text-white font-bold bg-[#161B22] py-3 px-4 rounded-lg' : 'text-gray-400 py-3 px-4 rounded-lg hover:bg-[#161B22]/10'}>{item.name}</Link>)}
                {loading ?
                    <div className='text-gray-400 py-3 px-4 rounded-lg hover:bg-[#161B22]/10 w-full'></div>
                    : user?.email &&
                    <button className='text-white font-bold bg-red-700 py-3 px-4 rounded-lg cursor-pointer' onClick={handleLogOutUser}>Logout</button>
                }
            </section>
        </div>
    )
}

export default Sidebar