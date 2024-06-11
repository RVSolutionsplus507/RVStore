import { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider ({ children }) {
    const [cart, setCart] = useState([]);

    function addToCart(service, quantity) {
        if (typeof quantity !== "number") {
            quantity = parseInt(quantity);
        }

        const serviceInCartIndex = cart.findIndex(cartItem => cartItem.id === service.id);
        if (serviceInCartIndex >= 0) {
            const newCart = structuredClone(cart);
            newCart[serviceInCartIndex].quantity += quantity;
            return setCart(newCart);
        }
    
        setCart(prev => [...prev, { ...service, quantity }]);
    }

    function removeFromCart(item) {
        const newCart = cart.filter((cartItem) => cartItem.id !== item.id);
        setCart(newCart);
    }

    function clearCart() {
        setCart([]);
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
}

export { CartProvider };
