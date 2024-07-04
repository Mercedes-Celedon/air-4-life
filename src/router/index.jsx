import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import UserPage from "../pages/UserPage";
import Register from "../pages/Register";
import LogIn from "../pages/LogIn"
import ErrorPage from "../pages/ErrorPage"

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

