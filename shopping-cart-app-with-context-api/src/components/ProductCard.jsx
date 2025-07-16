import { useCartContext } from "../context/CartContext.js";
export default function ProductCard({ _id, name, price, seller }) {
  const image = "https://placehold.co/400";
  const { addToCart } = useCartContext();

  function onClickHandler(e, data) {
    e.preventDefault();
    addToCart(data);
  }
  return (
    <div className="bg-white rounded-3xl flex justify-center items-center flex-col hover:shadow-md w-full max-w-[290px] min-w-[180px] gap-0 m-4 h-[360px] ">
      <div className="p-8">
        <img src={image} height="50px" width="50px" alt="product image" />{" "}
      </div>
      <div className="p-8 flex flex-col justify-center items-center h-[185px]">
        <div className="text-center font-bold">
          <h1>{name}</h1>
        </div>
        <div>
          <h1>{seller}</h1>
        </div>
        <div>
          <h1>{price} Rs</h1>
        </div>
      </div>
      <div className="bg-blue-400 rounded-xl bottom-8 p-2 m-2  hover:bg-blue-500 hover:text-white">
        <button onClick={(e) => onClickHandler(e, { name, _id, price, seller })} >
          Add to cart
        </button>
      </div>
    </div>
  );
}
