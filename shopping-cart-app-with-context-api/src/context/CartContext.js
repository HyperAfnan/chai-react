import { createContext, useContext } from "react";

export const CartContext = createContext({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  totalItems: 0,
  totalPrice: 0,
});

export const CartContextProvider = CartContext.Provider;

export const useCartContext = () => {
  return useContext(CartContext);
};
