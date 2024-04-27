import React from 'react';
import SearchBar from '@/components/SearchBar';
import CartWidget from '@/components/CartWidget';
import Profile from '@/components/Profile';
import logorvs from '@/assets/logorvs.webp';

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between p-4 lg:p-4 bg-slate-700 shadow-lg">
            <div className="flex items-center space-x-4">
                <img src={logorvs} alt="RVStore Logo" className="w-16 h-12 lg:w-24 lg:h-14" />
                <span className="text-white font-lato-bold text-bold text-xl">RVStore</span>
            </div>
            <div className="hidden lg:block w-1/2">
                <SearchBar />
            </div>
            <div className="flex items-center space-x-4">
                <CartWidget />
                <Profile />
            </div>
        </nav>
    );
};
