import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Pages/Home'
import About from './Pages/About'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import Products from './Pages/Products'
import OnSale from './Pages/OnSale'
import Details from './Pages/Details'
import Wishlist from './Pages/Wishlist'
import Cart from './Pages/Cart'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'
import Profile from './Pages/Profile'
import Admin from './Pages/Admin'
import BuyProducts from './Pages/BuyProducts'
import { Provider } from 'react-redux';
import { store } from "./Config/Store";
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Dashboard from './Components/Admin/Dashboard/Dashboard';
import ProductsList from './Components/Admin/Products/Products'
import Userslist from './Components/Admin/UsersList/Userslist';
import UserDetails from './Components/Admin/UserDetails/UserDetails';
import ProductsDetails from './Components/Admin/ProductsDetails/ProductsDetails';
import AddNewProduct from './Components/Admin/AddNewProduct/AddNewProduct';
import UpdateProduct from './Components/Admin/UpdateProduct/UpdateProduct';
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:"/blog",
            element:<Blog/>
        },
        {
            path:"/about",
            element:<About/>
        },
        {
            path:"/contact",
            element:<Contact/>
        },
        {
            path:"/products",
            element:<Products/>
        },
        {
            path:"/onsale",
            element:<OnSale/>
        },
        {
            path:"/details/:prodid",
            element:<Details/>
        },
        {
            path:"/wishlist",
            element:<Wishlist/>
        },
        {
            path:"/cart",
            element:<Cart/>
        },
        {
            path:"/profile",
            element:<Profile/>
        },
        {
            path:"/buy",
            element:<BuyProducts/>
        }
      ],
    },
    {
        path:'/signup',
        element:<SignUp/>
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:"/admin",
        element:<Admin/>,
        children:[
            {
                path:"/admin",
                element:<Dashboard/>
            },
            {
                path:"/admin/products",
                element:<ProductsList/>
            },
            {
                path:"/admin/products/:productsId",
                element:<ProductsDetails/>
            },
            {
                path:"/admin/products/add",
                element:<AddNewProduct/>
            },
            {
                path:"/admin/products/update/:updateId",
                element:<UpdateProduct/>
            },
            {
                path:"/admin/users",
                element:<Userslist/>
            },
            {
                path:"/admin/users/:userId",
                element:<UserDetails/>
            }
        ]
    }
  ]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);
