import React from 'react';

const Appbar: React.FC = () => {
    return (
        <div className="flex items-center justify-between px-4 py-2 bg-white shadow-md">
            {/* Logo */}
            <div className="flex items-center space-x-2">
                <div className="text-red-600 text-xl font-bold">YouTube</div>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-md mx-4">
                <div className="flex">
                    <input
                        type="text"
                        placeholder="Search"
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-l-full focus:outline-none focus:border-blue-500"
                    />
                    <button className="px-6 py-2 bg-gray-100 border border-l-0 border-gray-300 rounded-r-full hover:bg-gray-200">
                        🔍
                    </button>
                </div>
            </div>

            {/* User Actions */}
            <div className="flex items-center space-x-4">
                <button className="p-2 hover:bg-gray-100 rounded-full">📹</button>
                <button className="p-2 hover:bg-gray-100 rounded-full">🔔</button>
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm">
                    U
                </div>
            </div>
        </div>
    );
};

export default Appbar;