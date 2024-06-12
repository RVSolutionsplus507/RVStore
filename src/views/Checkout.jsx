import React, { useEffect } from 'react';
import { useCart } from '@/hooks/useCart'; 
import { FaTrash } from 'react-icons/fa';

const Checkout = () => {
    const { cart, removeFromCart } = useCart();
    
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const handlePaypalPayment = () => {
        // Logica para procesar el pago con PayPal
    };

    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="container w-1/2 px-4 py-8">
            <h1 className="text-2xl font-bold mb-4">Checkout</h1>
            <div className="flex items-center justify-center">
                {cart.length > 0 ? (
                    <ul>
                        {cart.map((item) => (
                            <li key={item.id} className="mb-4">
                                <div className="bg-white p-4 rounded shadow">
                                    <div className="flex flex-col md:flex-row items-center">
                                        <img src={item.image} alt={item.title} className="w-16 h-16 mr-4" />
                                        <div>
                                            <p className="font-bold">ID: <span className="font-normal">{item.id}</span></p>
                                            <p className="font-bold">Title: <span className="font-normal">{item.title}</span></p>
                                            <p className="font-bold">Category: <span className="font-normal">{item.category}</span></p>
                                            <p className="font-bold">Price: <span className="font-normal">{item.price}</span></p>
                                            <p className="font-bold">Quantity: <span className="font-normal">{item.quantity}</span></p>
                                        </div>
                                        <button
                                            className="ml-auto text-red-500 hover:text-red-600"
                                            onClick={() => removeFromCart(item)}
                                        >
                                            <FaTrash />
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No items in the cart.</p>
                )}
            </div>
            <div className="flex justify-end mt-4">
                <p className="font-bold">Total Price: <span className="font-normal">${totalPrice.toFixed(2)}</span></p>
            </div>
            <button
                className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-lg w-full"
                onClick={handlePaypalPayment}
            >
                Pay with PayPal
            </button>
        </div>
    );
};

export default Checkout;
