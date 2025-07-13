import { useCartContext } from "../context/CartContext.js";
import { CartContextProvider } from "../context/CartContextProvider.jsx";
import CartCard from "./CartCard.jsx";

const Cart = () => {
  const { cartItems , removeFromCart } = useCartContext() || [];
  return (
    <CartContextProvider value={{cartItems, removeFromCart }}>
      {cartItems.map((product) => (
        <div key={product._id}>
          <CartCard
            _id={product._id}
            name={product.name}
            price={product.price}
            seller={product.seller}
          />
        </div>
      ))}
    </CartContextProvider>
  );
};

export default Cart;
