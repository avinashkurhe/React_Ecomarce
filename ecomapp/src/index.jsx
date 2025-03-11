import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Dashbord"; // Ensure the correct file name
import Contact from "./Contact";
import Product from "./Product.jsx";
import ProductDetails from "./ProductDetails";
import ErrorPage from "./ErrorPage"; // 
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

const routes = createBrowserRouter([ 
    { 
      path:'/', 
      element:<Dashboard/>, 
      errorElement:<ErrorPage/>, 
      children:[ 
        { 
          path:'/contact', 
          element:<Contact/> 
        }, 
        { 
          path:'/product', 
          element:<Product/> 
        }, 
        { 
          path:'/product/:id', 
          element:<ProductDetails/> 
        } 
      ] 
    } 
  ]) 
  

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={routes} />);
