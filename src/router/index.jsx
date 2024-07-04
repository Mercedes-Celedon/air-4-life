import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import UserPage from "../pages/UserPage";
import Login from "../pages/Login";
import Register from "../pages/Register";

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
        path: "/Login",
        element: <Login />
    },
    {   
        path: "/Register",
        element: <Register />

    }

])