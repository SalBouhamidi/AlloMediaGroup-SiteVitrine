import { Link } from "react-router-dom";
import  {useForm}  from "react-hook-form";
import * as yup from "yup";
import axios from "axios";
import  {yupResolver}  from "@hookform/resolvers/yup";
import {toast} from 'sonner';

function Login() {
    const initialvalues = {
        email: '',
        password: ''
    }

    const formValidation = yup.object().shape({
        email: yup.string().trim().matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'please enter a valid email').required('a valid email is required'),
        password: yup.string().trim().required('please enter your password because it is required'),
    })

    const {register,handleSubmit , formState: {errors}} = useForm({
        resolver:yupResolver(formValidation),
        defaultValues: initialvalues
    })

    async function handleLogin(data){
        try{
            const response = await axios.post('http://localhost:3000/api/auth/login', data);
            if(response){
                toast.success('You logged in successfully. Check your email for the OTP code.');
                localStorage.setItem('email', response.data.userFound.email );
                localStorage.setItem ('name', response.data.userFound.name);
            }else{
                console.log('no response', response);
                toast.error('please try to login again')
            }

        }catch(e){
            if(e.status == 401){
                toast.error('Credentials are not valid')
            }else{
                console.log('errpr of login', e)
                toast.error('smth bad happend')

            }
        }
    }


    return (
        <>
            <main className=" h-[100vh] flex justify-center items-center ">
                <div className="bg-gray-50 font-[sans-serif] w-[70vw]">
                    <div className="min-h-screen flex flex-col items-center justify-center py-6 px-4">
                        <div className="max-w-md w-full">
                            <div className="p-8 rounded-2xl bg-white shadow">
                                <h2 className="text-gray-800 text-center text-2xl font-bold">Sign in</h2>
                                <form onSubmit={handleSubmit(handleLogin)} className="mt-8 space-y-4">
                                    <div>
                                        <label className="text-gray-800 text-sm mb-2 block">Email</label>
                                        <div className="relative flex items-center">
                                            <input {...register("email")} data-cy="email" name="email" type="email" className="email w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-lime-400" placeholder="Enter Your email" />
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-4 h-4 absolute right-4" viewBox="0 0 24 24">
                                                <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                                                <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z" data-original="#000000"></path>
                                            </svg>
                                        </div>
                                        {errors.email && <span className="text-red-500">{errors.email.message}</span>}

                                    </div>

                                    <div>
                                        <label className="text-gray-800 text-sm mb-2 block">Password</label>
                                        <div className="relative flex items-center">
                                            <input {...register("password")} name="password" type="password" className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md outline-lime-400" placeholder="Enter password" />
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-4 h-4 absolute right-4 cursor-pointer" viewBox="0 0 128 128">
                                                <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                                            </svg>
                                        </div>
                                        {errors.password && <span className="text-red-500">{errors.password.message}</span>}

                                    </div>

                                    <div className="flex flex-wrap items-center justify-between gap-4">
                                        <div className="flex items-center">
                                            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                                            <label htmlFor="remember-me" className="ml-3 block text-sm text-gray-800">
                                                Remember me
                                            </label>
                                        </div>
                                        <div className="text-sm">

                                            <Link to="/forgetPassword" data-cy-forgetpassword="forgetpassword" className="text-lime-400 hover:underline font-semibold" >Forgot your password?</Link>
                                        </div>
                                    </div>

                                    <div className="!mt-8">
                                        <button type="submit" className="w-full py-3 px-4 text-sm tracking-wide rounded-lg text-white bg-lime-400 hover:bg-lime-300 focus:outline-none">
                                            Sign in
                                        </button>
                                    </div>
                                    <p className="text-gray-800 text-sm !mt-8 text-center">Don't have an account? <Link to="/register" data-cy-register="register" className="text-lime-400 hover:underline ml-1 whitespace-nowrap font-semibold">Register here</Link></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </>
    )
}
export {Login}



//color: acfa2d - b2b2b6 -  5e605b - 141414