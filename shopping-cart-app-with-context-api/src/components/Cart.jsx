import { useCartContext } from "../context/CartContext.js";
import CartCard from "./CartCard.jsx";
import CartComponent2 from "./CartComponent2.jsx";

const Cart = () => {
   const { cartItems, totalItems } = useCartContext();
   return (
      <div className="flex flex-col md:flex-row justify-center items-center ">
         <div>
            {cartItems.map((product) => (
               <div className="flex justify-center" key={Math.random()}>
                  <CartCard
                     _id={product._id}
                     name={product.name}
                     price={product.price}
                     seller={product.seller}
                  />
               </div>
            ))}
         </div>
         { totalItems ? <CartComponent2 /> : "" }
      </div>
   );
};

export default Cart;
   // const onclickHandler = (e) => {
   //     e.preventDefault();
   //     clearCart()
   //  }
         // {/* <div className="bg-blue-500 flex justify-center items-center bottom-0 absolute w-full h-15"> */}
         // {/*   <button type="button" onClick={e => onclickHandler(e)}> Clear Cart</button> */}
         // {/* </div> */}

