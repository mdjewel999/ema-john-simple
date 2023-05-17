import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Shop from "./components/Shop/Shop";
import Home from "./components/Layout/Home";
import Orders from "./components/Orders/Orders";
import Order_review from "./components/OrderReview/OrderReview";
import Manage_Inventory from "./components/Manage_Inventory/Manage_Inventory";
import Login from "./components/Login/Login";
import cartProductsLoader from "./loaders/cartProductsLoader";
import Checkout from "./components/Checkout/Checkout";
import SignUp from "./components/signUp/SignUp";
import AuthProvider from "./components/providers/AuthProvider";
import PrivateRoute from "./components/routes/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>,
        loader: ()=>fetch('http://localhost:5000/totalProducts')
      },
      {
        path: "/Orders",
        element: <Orders></Orders>,
        loader: cartProductsLoader,
      },
     
      {
        path: "/manage_inventory",
        element: <PrivateRoute><Manage_Inventory></Manage_Inventory></PrivateRoute>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "checkout",
        element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
