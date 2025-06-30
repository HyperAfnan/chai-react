import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Layout from "./components/Layout/layout.jsx";
import About from "./components/About/about.jsx";
import Home from "./components/Home/home.jsx";
import Contact from "./components/Contact/contact.jsx";
import User from "./components/User/user.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import Github, { githubLoader } from "./components/Github/github.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home />, },
      { path: "about", element: <About />, },
      { path: "contact", element: <Contact />, },
      { path: "user/:userId", element: <User />, },
      { path: "github", element: <Github />, loader: githubLoader },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
