/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { CartContext } from "./CartContext.js";

export const CartContextProvider = ({ children }) => {
const [cartItems, setCartItems] = useState([]);

   useEffect(() => {
      // localStorage.setItem("cart", JSON.stringify(cartItems));
      console.log(`from useEffect ${Math.floor(Math.random() * 100)}`, cartItems)
   }, [cartItems]);

   const addToCart = (data) => setCartItems((prevItem) => [...prevItem, data])
   // const removeFromCart = (_id) => setCartItems(cartItems.filter(item => item._id !== _id ))
   const removeFromCart = (_id) => console.log(_id)
   const clearCart = () => setCartItems([])

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart}}>
      {children}
    </CartContext.Provider>
  );
};

