import { AppContext } from "../context/AppContext";
import { useContext } from "react";

// Custom hook for accessing the cart and its functions
export const useCart = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useMenubar must be used within a AppContextProvider");
  }
  const { cart, addToCart, removeFromCart, clearCart } = context;

  return { cart, addToCart, removeFromCart, clearCart };
};
