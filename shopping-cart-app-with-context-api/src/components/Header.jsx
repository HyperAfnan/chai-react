import { NavLink, useLocation } from "react-router-dom"

const Header = () => {
   const location = useLocation();
   return (
      <div className="sticky bg-white shadow-md text-center flex " >
         <div className="flex w-full items-center flex-col mb-3 mt-3">
            <h1 className="text-2xl font-bold">Shopping Cart</h1>
            <p className="text-gray-600">Your one-stop shop for all things!</p>
         </div>
         <div className="flex items-center">
            {location.pathname === "/" ? (
               <NavLink to="/cart" className="mx-4 text-blue-500 hover:text-blue-700">
                  <button type="button">
                     Cart (products)
                  </button>
               </NavLink>
            ) : (
               <NavLink to="/" className="mx-4 text-blue-500 hover:text-blue-700">
                  <button type="button">
                     Home
                  </button>
               </NavLink>
            ) }
         </div>
      </div>
   )
}

export default Header
