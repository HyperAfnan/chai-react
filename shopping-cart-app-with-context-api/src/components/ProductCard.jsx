/* eslint-disable no-unused-vars */
export default function ProductCard({ name, price, image, seller}) {
  return (
    <div>
         <div>
            <img src={image} alt="product image" />
         </div>
         <div>
            <h1>{name}</h1>
         </div>
         <div>
            <h1>{price}</h1>
         </div>
         <div>
            <h1>{seller}</h1>
         </div>

   </div>
  )
}

