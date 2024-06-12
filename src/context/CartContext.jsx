import { createContext, useState } from "react";
import { useToast } from "@/hooks/useToast";

export const CartContext = createContext();

function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [showModal, setShowModal] = useState(true);
    const { notifySuccess } = useToast();

    function addToCart(service) {
      setCart((prevCart) => {
        const itemIndex = prevCart.findIndex((item) => item.id === service.id);
        if (itemIndex !== -1) {
          const newCart = [...prevCart];
          newCart[itemIndex].quantity += service.quantity;
          return newCart;
        }
        return [...prevCart, service];
      });
        notifySuccess("Item added to cart");
    }

    function getCartItems() {
        return cart.reduce((acc, item) => acc + item.quantity, 0);
    }

    function removeFromCart(item) {
        const newCart = cart.filter((cartItem) => cartItem.id !== item.id);
        setCart(newCart);
        notifySuccess("Item removed from cart");
    }

    function clearCart() {
        setCart([]);
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
