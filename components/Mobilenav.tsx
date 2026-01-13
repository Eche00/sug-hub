'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import RoofingIcon from '@mui/icons-material/Roofing';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import MapsUgcIcon from '@mui/icons-material/MapsUgc';

function Mobilenav() {
    const pathname = usePathname()

    // Sidebar Nav 
    const sideBarItems = [
        { name: "Home", link: '/', icon: RoofingIcon },
        { name: "About", link: '/about', icon: LocalActivityIcon },
        { name: "Events", link: '/events', icon: BubbleChartIcon },
        { name: "Excos", link: '/excos', icon: Diversity1Icon },
        { name: "Student Voice", link: '/studentvoice', icon: MapsUgcIcon },
    ];

    return (
        <div className="w-fit mx-auto  shadow-2xl  rounded-full bg-[#161B22] p-1">
            <nav className=" flex items-center justify-between w-full text-[12px] ">
                {sideBarItems.map((item) => (
                    <Link href={item.link}>
                        <div className={pathname === item.link ? 'flex justify-center items-center text-white font-bold w-14.75 h-14.75 bg-[#1B7339] rounded-full' : 'flex justify-center items-center text-gray-400 w-14.75 h-14.75'}>
                            <item.icon className={pathname === item.link ? 'text-white' : 'text-gray-400'} fontSize='large' />
                        </div>
                    </Link>
                ))}
            </nav>
        </div>
    )
}

export default Mobilenav