import React from 'react';
import cartempty from '@/assets/cartempty.webp';
import { AiOutlineClose } from 'react-icons/ai';
import { useCart } from '@/hooks/useCart';


export default function ItemListContainer() {
    const { cart, removeFromCart, clearCart } = useCart();

    return (
        <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-4">
            <div className="flex flex-col items-center">
                {cart.length > 0 ? (
                    <>
                        <ul>
                            {cart.map((item) => (
                                <li key={item.id} className="flex items-center justify-between w-full">
                                    <div className="flex items-center">
                                        <img src={item.image} alt={item.title} className="w-12 h-12 rounded-full object-contain" />
                                        <div className="ml-4">
                                            <h3 className="text-lg font-semibold">{item.title}</h3>
                                            <p className="text-gray-500">${item.price}</p>
                                            <p className="text-gray-500 ml-2">Quantity: {item.quantity}</p> 
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <button onClick={() => removeFromCart(item)} className="text-red-500 hover:text-red-700">
                                            <AiOutlineClose size={24} className='ml-12' />
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <button onClick={clearCart} className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md">
                            Clear Cart
                        </button>
                    </>
                ) : (
                    <>
                        <img src={cartempty} alt="Cart Empty" className="w-full h-36" />
                        <p className='text-center'>Cart Empty</p>
                    </>
                )}
            </div>
        </div>
    );
}
