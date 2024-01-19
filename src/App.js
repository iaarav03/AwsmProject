import React from "react";
import  ReactDOM from "react-dom";
import Header from "./Header";
import Body from "./Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Menu from "./Restmenu";
import About from "./About";
import { Provider } from "react-redux";
import store from "./store";
import Cart from "./cart";
const AppLayout=()=>(
   

<Provider store={store}>
    <div className="bg-gradient-to-r from-green-200 via-blue-100 to-purple-200 min-h-screen">
      <Header />
      <Outlet />
    </div>

  </Provider>



);


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
          element: <Menu />,
        },
      ],
    },
    // {
    //   path: "/login",
    //   element: <Login />,
    // },
  ]);
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<RouterProvider router={appRouter} />);


