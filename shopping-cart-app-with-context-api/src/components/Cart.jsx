import { useCartContext } from "../context/CartContext.js";
import CartCard from "./CartCard.jsx";

const Cart = () => {
  const { cartItems } = useCartContext() || [];
  // const onclickHandler = (e) => {
  //     e.preventDefault(); 
  //     clearCart()
  //  }

  return (
    <div >
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
      {/* <div className="bg-blue-500 flex justify-center items-center bottom-0 absolute w-full h-15"> */}
      {/*   <button type="button" onClick={e => onclickHandler(e)}> Clear Cart</button> */}
      {/* </div> */}
    </div>
  );
};

export default Cart;
