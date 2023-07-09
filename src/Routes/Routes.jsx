import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Pages/Secret/Secret";
import Contact from "../Pages/Contact/Contact";
import Dashboard from "../Layouts/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import Reservation from "../Pages/Dashboard/Reservation/Reservation";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItem from "../Pages/Dashboard/AddItem/AddItem";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: "/menu",
                element: <Menu />
            },
            {
                path: "/order/:category",
                element: <Order />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/signup",
                element: <SignUp />
            },
            {
                path: "/contact",
                element: <PrivateRoute><Contact /></PrivateRoute>
            },
            {
                path: "/secret",
                element: <PrivateRoute><Secret /></PrivateRoute>
            }
        ]
    },
    {
        path: "dashboard",
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            {
                path: "mycart",
                element: <MyCart />
            },
            {
                path: "reservations",
                element: <Reservation />
            },
            {
                path: "allusers",
                element: <AllUsers />
            },
            {
                path: "addItem",
                element: <AdminRoute><AddItem /></AdminRoute>
            },
            {
                path: 'manageitems',
                element: <AdminRoute><ManageItems /></AdminRoute>
            }
        ]
    }
]);