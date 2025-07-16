import { useCartContext } from "../context/CartContext.js";
export default function CartComponent2() {
   const { totalPrice, totalItems } = useCartContext();
   const grandTotal = totalPrice() + 4;
   return (
      <div className="flex justify-center flex-col shadow-xs bg-white h-full w-full max-w-[400px] min-w-[250px] rounded-2xl m-2">
         <div className="font-bold flex justify-center text-lg m-3">
            Products Details
         </div>
         <div className="flex flex-row m-2 p-2 w-full ">
            <div className="text-sm w-1/2 flex justify-center ">Total Items</div>
            <div className="flex w-1/2 justify-center">{totalItems}</div>
         </div>
         <div className="flex flex-row m-2 p-2 w-full ">
            <div className="text-sm w-1/2 flex justify-center">Price</div>
            <div className="flex w-1/2 justify-center">
               ₹{totalItems ? totalPrice() : 0}
            </div>
         </div>
         <div className="flex flex-row m-2 p-2 w-full ">
            <div className="text-sm w-1/2 flex justify-center">Platform Fees</div>
            <div className="flex w-1/2 justify-center">₹{totalItems ? 4 : 0}</div>
         </div>
         <div className="flex flex-row m-2 p-2 w-full ">
            <div className="text-sm w-1/2 flex justify-center">Grand Total</div>
            <div className="flex w-1/2 justify-center">
               ₹{totalItems ? grandTotal : 0}
            </div>
         </div>
      </div>
   );
}
