// import App from './App';
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./component/MainLayout.jsx";
import SignUp from "./view/Signup.jsx";
import Login from "./view/login.jsx";
import ProductDetailPage from "./view/ProductDetailPage.jsx";
import Products from "./component/Productcard.jsx";
import About from "./view/AboutUsPage.jsx";
import Feedback from "./view/FeedbackPage.jsx";
import Logout from "./view/Logout.jsx";
import Cart from "./view/AddToCart.jsx";
import LandingPage from "./view/LandingPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
       { path: "", element: <LandingPage/> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <SignUp /> },
      { path: "products", element: <Products /> },
      { path: "about", element: <About /> },
      { path: "feedback", element: <Feedback /> },
      { path: "logout", element: <Logout /> },
      { path: "product/:productId", element: <ProductDetailPage /> },
      { path: "cart", element: <Cart/>}
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <RouterProvider router={router} />
    {/* <App/> */}
  </>
);

