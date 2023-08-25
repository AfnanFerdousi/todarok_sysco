import React, { useState } from 'react';
import { FaHome, FaUsers, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { FiMenu, FiX } from 'react-icons/fi';
import Image from 'next/image';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`h-screen bg-blue-700 text-white ${isOpen ? 'w-60' : 'w-16'} transition-all ease-in-out duration-300`}>
            <div className="flex items-center justify-between p-4">
                <div className="flex items-center space-x-2">
                    <div className={isOpen ? 'block' : 'hidden'}>
                        <Image src="logo.svg" alt="Logo" width={40} height={40} />
                    </div>
                    <div className="text-2xl font-semibold">Dashboard</div>
                </div>
                <button onClick={toggleSidebar} className="text-xl">
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>
            <nav className="flex flex-col p-4">
                <Link to="/" className="flex items-center p-2 space-x-2 rounded-lg hover:bg-blue-600">
                    <IconContext.Provider value={{ size: '1.5rem' }}>
                        <FaHome />
                    </IconContext.Provider>
                    <span className={isOpen ? 'block' : 'hidden'}>Home</span>
                </Link>
                <Link to="/users" className="flex items-center p-2 space-x-2 rounded-lg hover:bg-blue-600">
                    <IconContext.Provider value={{ size: '1.5rem' }}>
                        <FaUsers />
                    </IconContext.Provider>
                    <span className={isOpen ? 'block' : 'hidden'}>Users</span>
                </Link>
                <Link to="/settings" className="flex items-center p-2 space-x-2 rounded-lg hover:bg-blue-600">
                    <IconContext.Provider value={{ size: '1.5rem' }}>
                        <FaCog />
                    </IconContext.Provider>
                    <span className={isOpen ? 'block' : 'hidden'}>Settings</span>
                </Link>
                <Link to="/logout" className="flex items-center p-2 space-x-2 rounded-lg hover:bg-blue-600">
                    <IconContext.Provider value={{ size: '1.5rem' }}>
                        <FaSignOutAlt />
                    </IconContext.Provider>
                    <span className={isOpen ? 'block' : 'hidden'}>Logout</span>
                </Link>
            </nav>
        </div>
    );
};

export default Sidebar;
