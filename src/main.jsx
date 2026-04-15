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
import SignUp from './Component/SignUp.jsx';
import SignIn from './Component/SignIn.jsx';
import AuthProvider from './Component/Context/AuthProvider.jsx';
import Users from './Component/Users.jsx';

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
    {
      path:"signUp",
      Component:SignUp
    },
    {
      path:"signIn",
      Component:SignIn
    },
    {
      path:'users',
      loader:()=>fetch('http://localhost:3000/users'),
      Component:Users
    }
   ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
  
   <AuthProvider>
    <RouterProvider router={router} />,
   </AuthProvider>
  </StrictMode>,
)
