import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiSolidDashboard, BiSolidUserAccount } from 'react-icons/bi';
import { BsPlusSquareFill, BsFillHddStackFill } from 'react-icons/bs';
import { HiDocumentReport } from 'react-icons/hi';
import { IoMdSettings } from 'react-icons/io';
import { RiBillLine } from 'react-icons/ri';
const Sidebar = () => {
    const menu = [
        {
            name: "Dashboard",
            icon: "BiSolidDashboard"
        },
        {
            name: "Add Stock",
            icon: "BsPlusSquareFill"
        },
        {
            name: "Billing",
            icon: "RiBillLine"
        },
        {
            name: "Accounts",
            icon: "BsFillHddStackFill"
        },
        {
            name: "HRM",
            icon: "BiSolidUserAccount"
        },
        {
            name: "Reporting",
            icon: "HiDocumentReport"
        },
        {
            name: "Settings",
            icon: "IoMdSettings"
        }
    ];

    const iconMap = {
        BiSolidDashboard: BiSolidDashboard,
        BsPlusSquareFill: BsPlusSquareFill,
        BsFillHddStackFill: BsFillHddStackFill,
        RiBillLine: RiBillLine,
        BiSolidUserAccount: BiSolidUserAccount,
        HiDocumentReport: HiDocumentReport,
        IoMdSettings: IoMdSettings

    };
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <div className="menu ps-[65px] pt-[100px] max-w-[435px] w-[25vw] min-h-full bg-[#0046FF] text-base-content">
                        <Image src="logo.svg" alt="image" maxWidth={221} width={180} height={61}>                            
                        </Image>
                        <ul className='lg:md:mt-16'>
                            {menu.map((item, index) => {
                                const IconComponent = iconMap[item.icon]; 
                                return (
                                    <li className='text-[#fff] font-semibold text-2xl max-pb-[27px] pb-4' key={index}>
                                        <Link href={`/${item.name}`}>
                                            {IconComponent && <IconComponent />} {/* Render the icon */}
                                            <span>{item.name}</span>
                                        </Link>
                                    </li>
                                );
                            })}
                            
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Sidebar;