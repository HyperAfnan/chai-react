// import { products } from "../data/products.js"
import ProductCard from "./ProductCard.jsx"


const ProductList = () => {
   return (
      <div className="bg-red-300">
         {/* {products.map((product) => (
            <div className="" key={product.image}>
               {product.name}
            </div>
         ))} */}
         <ProductCard name="name" price="price" image="image link" seller="seller" />
      </div>
   )
}

export default ProductList
