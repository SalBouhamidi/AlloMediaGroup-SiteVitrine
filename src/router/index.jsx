
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home"
import {Login} from "../pages/login"
import {Register} from "../pages/register"
import ResetPassword from "../pages/resetpassword"
import Layout from "../pages/Layouts/layout"
import ForgetPassword from "../pages/forgetPassword"

const router =createBrowserRouter([
    {
        element: <Layout/>,
        children: [    {
            path: "/",
            element: <Home/>,
        },
        {
            path: '*',
            element: <p>pqge not found</p>
    
        }

            

        ]
    },

    {
        path:'/register',
        element: <Register />,
    },
    {
        path: "/login",
        element: <Login/>, 
    },
    {
        path: "/forgetPassword",
        element: <ForgetPassword/>
    },
    {
        path: "/resetpassword",
        element: <ResetPassword/>, 
    }, 


]);
export default router;