import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import SideBar from '@/components/SideBar';
import SearchBar from '@/components/SearchBar';
import CartWidget from '@/components/CartWidget';
import Profile from '@/components/Profile';
import logorvs from '@/assets/logorvs.webp';

export default function Navbar() {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);

    const toggleSideBar = () => {
        setIsSideBarOpen(!isSideBarOpen);
    };

    return (
        <nav className="flex items-center justify-between p-4 bg-slate-700 shadow-lg sticky top-0 z-10">
            <div className="flex items-center space-x-4">
                {isSideBarOpen ? (
                    <FaTimes className="text-white cursor-pointer transform hover:scale-110 transition duration-500 ease-in-out" onClick={toggleSideBar} />
                ) : (
                    <FaBars className="text-white cursor-pointer transform hover:scale-110 transition duration-500 ease-in-out" onClick={toggleSideBar} />
                )}
                <Link to="/" className="cursor-pointer">
                    <img src={logorvs} alt="RVStore Logo" className="w-16 h-12 lg:w-24 lg:h-14" />
                </Link>
                <Link to="/" className="cursor-pointer">
                    <span className="text-white font-lato-bold text-bold text-xl">RVStore</span>
                </Link>
            </div>
            <div className="hidden lg:block w-1/2">
                <SearchBar />
            </div>
            <div className="flex items-center">
                <CartWidget />
                <Profile />
            </div>
            {isSideBarOpen && (
                <SideBar toggleSideBar={toggleSideBar} />
            )}
        </nav>
    );
};
