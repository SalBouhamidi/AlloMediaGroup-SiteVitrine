
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home"
import {Login} from "../pages/login"
import {Register} from "../pages/register"
import ResetPassword from "../pages/resetpassword"
import Layout from "../pages/Layouts/layout"
import ForgetPassword from "../pages/forgetPassword"
import VerificationOTP from "../pages/verificationOTP";
import EmailVerification from "../pages/emailVerification";
import UserProfil from "../pages/userProfil";
import ProtectedRoute from "../utils/ProtectRouter";


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
        path: '/profil',
        element:  <ProtectedRoute element={<UserProfil />} />
    },
    {
        path: "/forgetPassword",
        element: <ForgetPassword/>
    },
    {
        path: "/resetpassword/:id/:token",
        element: <ResetPassword/>, 
    },{
        path: "/verify-email/:id/:otp",
        element: <VerificationOTP/>
    },{
        path: "/verify/:userId/:token",
        element: <EmailVerification/>
    }


]);
export default router;