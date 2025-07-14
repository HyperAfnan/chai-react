/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { CartContext } from "./CartContext.js";

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // useEffect(() => {
  //    // localStorage.setItem("cart", JSON.stringify(cartItems));
  //    // console.log(`from useEffect ${Math.floor(Math.random() * 100)}`, cartItems)
  // }, [cartItems]);

  const addToCart = (data) =>
    setCartItems((prevItem) => {
      return [...prevItem, data];
    });

  const removeFromCart = (_id) => setCartItems( cartItems.filter((item) => item._id !== _id));
  const clearCart = () => setCartItems([]);
   const totalItems = cartItems.length;

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart, totalItems }}
    >
      {children}
    </CartContext.Provider>
  );
};
