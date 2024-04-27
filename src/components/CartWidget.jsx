import React, { useState } from 'react';
import { RiShoppingCartLine } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';
import ItemListContainer from '@/components/ItemListContainer';

export default function CartWidget () {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    return (
        <>
            <div onClick={handleClick} className='flex relative cursor-pointer'>
                <RiShoppingCartLine size={32} color="white" />
                <span className='absolute top-0 right-0 -mt-1 -mr-1 bg-green-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs'>0</span>
            </div>
            
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50">
                    <div className="bg-white p-4 absolute top-16 right-5 rounded-md">
                        <div className="flex justify-end">
                            <button onClick={() => setShowModal(false)} className="text-gray-500 hover:text-gray-700">
                                <AiOutlineClose size={24} />
                            </button>
                        </div>
                        <ItemListContainer greeting="The cart is empty" />
                    </div>
                </div>
            )}
        </>
    );
};
