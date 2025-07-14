import { products } from "../data/products.js";
import ProductCard from "./ProductCard.jsx";

const ProductList = () => {
  return (
    <div className="overflow-x-hidden overflow-y-scroll w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 place-items-center">
      {products.map((product) => (
        <div className="" key={Math.random()}>
          <ProductCard
            _id={product._id}
            name={product.name}
            price={product.price}
            image="image link"
            seller={product.sellerName}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
