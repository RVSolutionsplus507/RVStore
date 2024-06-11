import { useContext } from "react";
import { CartContext } from "@/context/CartContext";

function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}

export { useCart };





