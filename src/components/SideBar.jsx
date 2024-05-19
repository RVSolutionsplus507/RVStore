import React from 'react';
import { Link } from 'react-router-dom';
import { BiSolidCategory, BiArrowBack } from "react-icons/bi";

export default function SideBar({ toggleSideBar }) {
    const categories = ['Web Development', 'IPTV', 'Tech Support', 'APPs Development'];

    return (
        <div className="fixed top-20 left-0 h-screen w-48  p-4 bg-slate-700 text-white font-lato-bold text-1xl bg-opacity-80 ">
            <div className="flex items-center mb-4">
                <BiSolidCategory className="mr-2" />
                <h2 className="text-xl font-bold">Categories</h2>
                <BiArrowBack className="ml-5 cursor-pointer" onClick={toggleSideBar} />
            </div>
            <ul className='space-y-1 mb-2'>
                <li className="text-gray-700 hover:text-gray-900 cursor-pointer transition-colors duration-300">
                    <Link to="/services" className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 hover:bg-slate-100 hover:text-black">
                        All
                    </Link>
                </li>
            </ul>
            <ul className="space-y-1">
                {categories.map((category, index) => (
                    <li key={index} className="text-gray-700 hover:text-gray-900 cursor-pointer transition-colors duration-300">
                        <Link to={`/services/${category}`} className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 hover:bg-slate-100 hover:text-black">
                            {category}
                        </Link>
                    </li>
                ))}
            </ul>
            <hr className="my-4 border-gray-400" />
        </div>
    );
};
