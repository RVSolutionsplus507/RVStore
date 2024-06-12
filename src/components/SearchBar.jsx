import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { useSearch } from '@/hooks/useSearch';
import { useServices } from '@/hooks/useServices';

export default function SearchBar() {
    const { search, setSearch, error} = useSearch();
    const { searchServices } = useServices();
    
    const handleSubmit = (e) => { 
        e.preventDefault();
        searchServices(search);
       
    }

    const handleChange = (e) => {
        setSearch(e.target.value);
    }
    return (
        <div className="text-sm lg:flex-grow">
            <div className="relative w-full">
                <form className="flex items-center" onSubmit={handleSubmit}>
                    <input
                        name='search'
                        onChange={handleChange}
                        value={search}
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
                {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
            </div>
        </div>
    );
};
