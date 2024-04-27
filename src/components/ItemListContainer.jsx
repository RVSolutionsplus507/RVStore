import React from 'react';
import cartempty from '@/assets/cartempty.webp';

export default function ItemListContainer({greeting}) {
    return (
        <div className=" flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-4">
            <img src={cartempty} alt="Cart Empty" className="h-18 w-20 mb-5" />
            <p className='text-bold'>{greeting}</p>
        </div>
    );
};
