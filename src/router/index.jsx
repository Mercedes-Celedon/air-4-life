import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import UserPage from "../pages/UserPage";
export const router = createBrowserRouter([
    {   
        path: "/",
        errorElement:<ErrorPage />,  
        element: <Home/>
    },
    {
        path: "/UserPage",
        element: <UserPage />,
    },
])