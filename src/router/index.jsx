import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import LogIn from "../pages/LogIn";
import Register from "../pages/Register";import ErrorPage from "../pages/ErrorPage";
import UserPage from "../pages/UserPage"

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
        path: "/register",
        element: <Register />,
    },
    {
        path: "/login",
        element: <LogIn />,
    },
]);

