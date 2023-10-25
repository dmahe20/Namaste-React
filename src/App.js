import React, { lazy ,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from './Components/Header';
import Body from './Components/Body';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/Restaurantmenu";
//import Grocery from "./Components/Grocery";
// Namaste food app -


const Grocery = lazy(() => import("./Components/Grocery"));

const AppLayout = () => {
  return (
    <div className="app">
    {<Header />}
     <Outlet />
    </div>
  )
};

const appRouter = createBrowserRouter([
  {
    path:'/',
    element: <AppLayout />,
    children:[
      {
        path :'/',
        element: <Body />
      },
      {
        path :'/about',
        element: <AboutUs />
      },
      {
        path:'/contactus',
        element: <ContactUs />
      },
      {
        path:'/grocery',
        element: <Suspense fallback={<h1>Loading.....</h1>}><Grocery /></Suspense>
      },
      {
        path:'/restaurant/:resId',
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error />
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

