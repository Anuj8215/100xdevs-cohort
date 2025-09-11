import React, { useState } from 'react';

const Searchbar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="flex items-center max-w-md mx-auto">
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Search
            </button>
        </div>
    );
};

export default Searchbar;