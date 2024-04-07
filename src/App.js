import React from "react";
import  ReactDOM from "react-dom";

import Body from "./Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";

import About from "./About";
import { Provider } from "react-redux";
import store from "./store";
import Cart from "./cart";
import Header from "./Header";
import Footer from "./Footer";
import Restmenuu from "./RestmenuCard";
import MidBody from "./MidBody";
const AppLayout=()=>{
 


  return (
 
<Provider store={store}>
    
       <Header/>
      <Outlet />
      <Footer/>

   

  </Provider>



);
}

const appRouter = createBrowserRouter([
    {
      path: "/", // show path for routing
      element: <AppLayout />, // show component for particular path
    //   errorElement: <Error />, // show error component for path is different
      children: [
        // show children component for routing
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/restaurant/:resId",
          element: <Restmenuu />,
        },
        {
          path:"/mid",
          element:<MidBody/>
        }
      ],
    },
    // {
    //   path: "/login",
    //   element: <Login />,
    // },
  ]);
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<RouterProvider router={appRouter} />);


