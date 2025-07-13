/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useCartContext } from "../context/CartContext.js";
import { CartContextProvider } from "../context/CartContextProvider.jsx";
export default function ProductCard({ _id, name, price, seller }) {
   const image = "https://placehold.co/400";
   price = price + " Rs"

   const { addToCart , cartItems } = useCartContext();

   function onClickHandler(e, data) {
      e.preventDefault()
      addToCart(data)
   }

   // useEffect(() => {
   //    localStorage.setItem("cart", JSON.stringify(cartItems))
   // }, [cartItems])

   return (
      <CartContextProvider value={{ addToCart, cartItems }}>
         <div className="bg-white rounded-3xl flex justify-center items-center flex-col hover:shadow-2xl w-2xs m-4 " >
         <div className="p-8">
            <img src={image} height="50px" width="50px" alt="product image" />
         </div>
         <div className="p-8 flex flex-col justify-center items-center">
            <div>
               <h1>{name}</h1>
            </div>
            <div>
               <h1>{price}</h1>
            </div>
            <div>
               <h1>{seller}</h1>
            </div>
            <div className="bg-blue-400 rounded-xl p-2 m-2 b0rder-2 border-blue-500 hover:bg-blue-500 hover:text-white">
               <button onClick={e => onClickHandler(e, {_id, name, price, seller})}>
                  Add to cart
               </button>
            </div>
         </div>
         </div>
      </CartContextProvider>
   );
}
