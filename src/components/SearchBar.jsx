import React, { useContext, useRef } from 'react';
import { FaSearch } from 'react-icons/fa';
import { SearchContext } from '@/context/SearchContext';
import { useServices } from '@/hooks/useServices';

export default function SearchBar() {
    const { searchQuery, updateSearchQuery } = useContext(SearchContext);
    const { searchServices } = useServices();
    const messageRef = useRef(null);

    const handleSubmit = (e) => { 
        e.preventDefault();
        const results = searchServices(searchQuery);
        if (results === null) {
            messageRef.current.textContent = "We couldn't find anything.";
        } else {
            messageRef.current.textContent = ""; 
        }
    }

    const handleChange = (e) => {
        updateSearchQuery(e.target.value);
    }

    return (
        <div className="text-sm lg:flex-grow">
            <div className="relative w-full">
                <form className="flex items-center" onSubmit={handleSubmit}>
                    <input
                        name='search'
                        onChange={handleChange}
                        value={searchQuery}
                        type="text"
                        placeholder="Web Development, IPTV, Wordpress...."
                        className="px-2 py-2 rounded-xl focus:outline-none focus:shadow-outline hover:shadow-green-600 w-full text-lg"
                    />
                    <button
                        type='submit'
                        className="ml-2 px-4 py-2 rounded-xl bg-green-500 text-white hover:bg-green-600">
                        <FaSearch size={18} />
                    </button>
                </form>
            </div>
            <div ref={messageRef} className="text-red-500 mt-2"></div> 
        </div>
    );
};
