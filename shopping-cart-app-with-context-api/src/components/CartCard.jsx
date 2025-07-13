import { useCartContext } from "../context/CartContext.js";
const CartCard = ({ _id, name, price, seller }) => {
   const { removeFromCart } =  useCartContext()
   let image = "https://placehold.co/400";
   function onclickhandler(e, _id) {
      e.preventDefault()
      removeFromCart(_id)
   }
   return (
      <>
         <div className="bg-red-400 shadow-xl h-full w-full m-4 p-4 flex rounded-2xl  overflow-x-hidden">
            <div className="h-16 w-16">
               <img className="rounded-2xl" src={image} alt={name} />
            </div>
            <div className="pl-4 text-sm flex flex-col items-center justify-center">
               <div>
                  <div className=" font-bold">{name}</div>
               </div>
               <div>
                  <div>{seller}</div>
               </div>
            </div>
            <div className="font-bold flex items-center pl-8">
               ₹{price}
            </div>
            <div className="bg-blue-400 flex justify-center m-2 p-2 rounded-xl ">
               <button type="button" onClick={ e => onclickhandler(e, _id)}>
                  remove
               </button>
            </div>
         </div>
      </>
   );
};

export default CartCard;
