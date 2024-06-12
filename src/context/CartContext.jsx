import { createContext, useState } from "react";
import { useToast } from "@/hooks/useToast";

export const CartContext = createContext();

function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [showModal, setShowModal] = useState(true);
    const { notifySuccess } = useToast();

    function addToCart(service) {
        setCart((currentCart) => {
            const itemIndex = currentCart.findIndex((item) => item.id === service.id);
            if (itemIndex > -1) {
                const newCart = [...currentCart];
                newCart[itemIndex].quantity += 1;
                return newCart;
            }
            return [...currentCart, { ...service, quantity: 1 }];
        });
        localStorage.setItem("cart", JSON.stringify(cart));
        notifySuccess("Item added to cart");
    }

    function getCartItems() {
        return cart.reduce((acc, item) => acc + item.quantity, 0);
    }

    function removeFromCart(item) {
        const newCart = cart.filter((cartItem) => cartItem.id !== item.id);
        setCart(newCart);
        localStorage.setItem("cart", JSON.stringify(newCart));
        notifySuccess("Item removed from cart");
    }

    function clearCart() {
        setCart([]);
        localStorage.removeItem("cart");
        notifySuccess("Cart cleared");
    }

    function toggleModal() {
        setShowModal(!showModal);
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, getCartItems, toggleModal }}>
            {children}
        </CartContext.Provider>
    );
}

export { CartProvider };
