import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter , RouterProvider } from "react-router-dom"
import Layout from "./components/Layout.jsx"
import ProductList from "./components/ProductList.jsx"
import Cart from "./components/Cart.jsx"

const router = createBrowserRouter([ 
   {
      path: "/",
      element: <Layout />,
      children: [
         {
            index: true,
            element: <ProductList/> 
         },
         {
            path: "cart",
            element: <Cart /> 
         }
      ]
   }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
