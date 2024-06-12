import React, { useState } from 'react';
import { RiShoppingCartLine } from 'react-icons/ri';
import { BsArrowLeft } from 'react-icons/bs';
import ItemListContainer from '@/components/ItemListContainer';
import { useCart } from '@/hooks/useCart'; 


export default function CartWidget() {
    const { cart } = useCart(); 
    const [showModal, setShowModal] = useState(false); 
    const handleClick = () => {
        setShowModal(!showModal); 
    };

    return (
        <>
            <div onClick={handleClick} className='flex relative cursor-pointer mr-4'>
                <RiShoppingCartLine size={32} color="white" />
                <span className='absolute top-0 right-0 -mt-1 -mr-1 bg-green-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs font-bold'>
                    {cart.length}
                </span>
            </div>

            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50">
                    <div className="bg-white p-2 absolute top-16 right-20 rounded-md">
                        
                        <div className="flex justify-between">
                            <div className="flex justify-center items-center ml-4 mt-4">
                                <RiShoppingCartLine size={32} color="gray" />
                                <h2 className="text-2xl font-bold text-gray-700 ml-2">Your Cart</h2>
                            </div>
                            <button onClick={handleClick} className="text-gray-500 hover:text-gray-900 mt-2 mr-4">
                                <BsArrowLeft size={24}/><h2>Back</h2>
                            </button>
                        </div>
                        <ItemListContainer handleClick={handleClick} greeting="The cart is empty" />
                    </div>
                </div>
            )}
        </>
    );
};
