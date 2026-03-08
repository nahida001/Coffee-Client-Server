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

const router = createBrowserRouter([
  {
    path: "/",
   Component: MainLayouts,
   Children:[
    {
      index:true,
      Component:Home
    },
    {
      path: "/addcoffee",
      Component:AddCoffee
   
    },
    {
      path: "/updatecoffee",
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
