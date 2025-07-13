import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart.jsx";
import ProductList from "./components/ProductList.jsx";
import Layout from "./components/Layout.jsx";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<ProductList />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}


export default App
