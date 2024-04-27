import React from 'react';
import { FaSearch } from 'react-icons/fa';

export default function SearchBar() {
    return (
        <div className="text-sm lg:flex-grow">
            <div className="relative w-full">
                <div className="flex items-center">
                    <input
                        type="text"
                        placeholder="Search"
                        className="px-2 py-2 rounded-xl focus:outline-none focus:shadow-outline hover:shadow-green-600 w-full text-lg"
                    />
                    <button className="ml-2 px-4 py-2 rounded-xl bg-green-500 text-white hover:bg-green-600">
                        <FaSearch size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
};
