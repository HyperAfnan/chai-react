import { createContext, useContext } from "react";

export const CartContext = createContext({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  totalItems: 0,
  totalPrice: () => {},
});

export const useCartContext = () => {
  return useContext(CartContext);
};
