import { Trash2 } from "lucide-react";
import { useCartContext } from "../context/CartContext.js";
const CartCard = ({ _id, name, price, seller }) => {
  const { removeFromCart } = useCartContext();
  let image = "https://placehold.co/400";
  function onclickhandler(e, _id) {
    e.preventDefault();
    removeFromCart(_id);
  }
  return (
    <>
      <div className=" bg-white hover:shadow-sm w-[720px] m-2 p-4 flex rounded-2xl place-content-evenly ">
        <div className="h-16 w-16 flex items-center justify-center">
          <img className="rounded-2xl" src={image} alt={name} />
        </div>
        <div className="flex items-center justify-between w-full">
          <div className="pl-4 w-[280px] flex flex-col items-center justify-center">
            <div>
              <div className=" text-md text-center font-bold">{name}</div>
            </div>
            <div>
              <div className="text-sm">{seller}</div>
            </div>
          </div>
          <div className="font-bold flex items-center justify-center w-[70px] text-sm m-2">
            ₹{price}
          </div>
        </div>
        <div className="bg-blue-400 m-2 p-2 h-[48px] hover:bg-blue-500 hover:text-white hover:shadow-xl rounded-xl ">
          <button type="button" onClick={(e) => onclickhandler(e, _id)}>
            <Trash2 />
          </button>
        </div>
      </div>
    </>
  );
};

export default CartCard;
