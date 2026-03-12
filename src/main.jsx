import { Children, Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayouts from './Layouts/MainLayouts.jsx';
import Home from './Component/Home.jsx';
import AddCoffee from './Component/AddCoffee.jsx';
import UpdateCoffee from './Component/UpdateCoffee.jsx';
import CoffeeDetails from './Component/CoffeeDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
   Component: MainLayouts,
   children:[
    {
      index:true,
      loader:()=>fetch('http://localhost:3000/coffees'),
      Component:Home
    },
    {
      path: "addcoffee",
      Component:AddCoffee
   
    },
    {
      path:"coffee/:id",
      Component:CoffeeDetails

    },
    {
      path: "updatecoffee/:id",
      loader:({params})=>fetch(`http://localhost:3000/coffees/${params.id}`),
      Component:UpdateCoffee
   
    },
   ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />,
  </StrictMode>,
)
