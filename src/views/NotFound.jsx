import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound () {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
            <div className="text-6xl font-bold text-gray-800">404</div>
            <div className="text-2xl font-medium text-gray-600 mb-4">Page Not Found</div>
            <Link to="/" className="px-4 py-2 bg-slate-500 text-white rounded hover:bg-slate-600">
                Return Home
            </Link>
        </div>
    );
};
