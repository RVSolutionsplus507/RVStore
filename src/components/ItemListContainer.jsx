import React from 'react';
import { Link } from 'react-router-dom';
import cartempty from '@/assets/cartempty.webp';
import { AiOutlineClose } from 'react-icons/ai';
import { useCart } from '@/hooks/useCart';

export default function ItemListContainer({ handleClick }) {
    const { cart, removeFromCart, clearCart } = useCart();

    console.log(cart);

    return (
        <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md p-12">
            <div className="flex flex-col items-center">
                {cart.length > 0 ? (
                    <>
                        <ul>
                            {cart.map((item) => (
                                <li key={item.id} className="flex items-center justify-between w-full pb-5">
                                    <div className="flex items-center">
                                        <img src={item.image} alt={item.title} className="w-16 h-16 rounded-xl object-contain" />
                                        <div className="ml-5">
                                            <h3 className="text-lg font-semibold">{item.title}</h3>
                                            <p className="text-gray-500">Price: ${item.category === "IPTV" ? item.price.price : item.price}</p>
                                            <p className="text-gray-500">Quantity: {item.quantity}</p> 
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
                        <div className='flex gap-4'>
                            <button onClick={() => handleClick(false)} className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg">
                                <Link to="/checkout">Checkout</Link>
                            </button>
                            <button onClick={clearCart} className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg">
                                Clear Cart
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <img src={cartempty} alt="Cart Empty" className="w-full h-32" />
                        <p className='text-center text-xl'>Cart Empty</p>
                    </>
                )}
            </div>
        </div>
    );
}
