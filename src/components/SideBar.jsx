import React from 'react';
import { BiSolidCategory } from "react-icons/bi";

export default function SideBar() {
    const categories = ['Web Development', 'IPTV', 'Tech Support', 'APPs Development'];

    return (
        <div className="fixed top-20 left-0 h-screen w-48 bg-gray-200 p-4 bg-slate-700 text-white font-lato-bold text-1xl">
            <div className="flex items-center mb-4">
                <BiSolidCategory className="mr-2" />
                <h2 className="text-xl font-bold">Categories</h2>
            </div>
            <ul className="space-y-2">
                {categories.map((category, index) => (
                    <li key={index} className="text-gray-700 hover:text-gray-900 cursor-pointer transition-colors duration-300">
                        <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 hover:bg-gray-400 hover:bg-slate-100 hover:text-black">
                            {category}
                        </span>
                    </li>
                ))}
            </ul>
            <hr className="my-4 border-gray-400" />
        </div>
    );
};
