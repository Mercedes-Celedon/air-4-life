import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import UserPage from "../pages/UserPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
    {   
        path: "/",
        errorElement:<ErrorPage />,  
        element: <Home/>
    },
    {
        path: "/userpage",
        element: <UserPage />,
    },
    {
        path: "/login",
        element: <Login />
    },
    {   
        path: "/register",
        element: <Register />

    }

])