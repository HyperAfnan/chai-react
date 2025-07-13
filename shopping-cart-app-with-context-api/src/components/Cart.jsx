import CartCard from "./CartCard.jsx"

const Cart = () => {
   const cart = JSON.parse(localStorage.getItem("cart"))
   return (
      cart.map((product) => {
         return (
            <div key={product._id}>
               <CartCard 
                  _id={product._id}
                  name={product.name}
                  price={product.price}
                  seller={product.seller}
               />
            </div>
         )
      })
   )
}

export default Cart
