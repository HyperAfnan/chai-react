import { useState, useEffect } from "react";
import { CartContext } from "./CartContext.js";

export const CartContextProvider = ({ children }) => {
   const [cartItems, setCartItems] = useState(() => {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
   });

   useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cartItems));
   }, [cartItems]);

   const addToCart = (data) =>
      setCartItems((prevItem) => {
         return [...prevItem, data];
      });

   const removeFromCart = (_id) =>
      setCartItems(cartItems.filter((item) => item._id !== _id));
   const clearCart = () => setCartItems([]);
   const totalItems = cartItems.length;
   const totalPrice = () => { 
      let total = 0;
      for (let i = 0; i < cartItems.length; i++) total += cartItems[i].price;
      return total
   }

   return (
      <CartContext.Provider
         value={{ cartItems, addToCart, removeFromCart, clearCart, totalItems, totalPrice }}
      >
         {children}
      </CartContext.Provider>
   );
};
