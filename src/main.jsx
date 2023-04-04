import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/Shop/Shop';
import Home from './components/Layout/Home';
import Orders from './components/Orders/Orders';
import Order_review from './components/Order_review/Order_review';
import Manage_Inventory from './components/Manage_Inventory/Manage_Inventory';
import Login from './components/Login/Login';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home></Home>,
    children:[
      {
        path:'/',
        element:<Shop></Shop>
      },
      {
        path:'Orders',
        element:<Orders></Orders>
      },
      {
        path:'Order_review',
        element:<Order_review></Order_review>
      },
      {
        path:'Manage_Inventory',
        element:<Manage_Inventory></Manage_Inventory>
      },
      {
        path:'login',
        element:<Login></Login>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
