import { NavLink, useLocation } from "react-router-dom";
import { useCartContext } from "../context/CartContext.js";

const Header = () => {
  const location = useLocation();
  const { totalItems } = useCartContext();

  return (
    <div className="sticky top-0 bg-white shadow-md flex justify-between items-center w-full px-4 py-3 ">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold">Shopping Cart</h1>
        <p className="text-gray-600 text-sm">Your one-stop shop for all things!</p>
      </div>

      <div className="flex items-center space-x-4">
        {location.pathname === "/" ? (
          <NavLink to="/cart" className="text-blue-500 hover:text-blue-700">
            <button type="button">
              Cart {totalItems ? `(${totalItems})` : ""}
            </button>
          </NavLink>
        ) : (
          <NavLink to="/" className="text-blue-500 hover:text-blue-700">
            <button type="button">Home</button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Header;
