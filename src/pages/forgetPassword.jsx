import axios from "axios"
import { useState } from 'react';
import {toast} from 'sonner'
import { useEmail } from './emailContext'

export default function forgetPassword() {
    const { setEmail } = useEmail();
    const[email, setEmailInput]= useState('');

    async function handleEmail(e){
        e.preventDefault();
        setEmail(email);
        // console.log(email);
        let response = await axios.post(`http://localhost:3000/api/auth/forgetpassword`, {email});
        if(response){
            toast.success(response.data.message);
        }else{
            toast.error('Smth Went wrong please try again')
        }
        // console.log(response.data.message);
    }
    return (
        <>
            <main className=" h-[100vh] flex justify-center items-center ">
                <div className="bg-gray-50 font-[sans-serif] w-[70vw]">
                    <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
                        <h1 className="text-4xl font-medium text-center">Reset password</h1>
                        <form onSubmit={handleEmail} className="my-10">
                            <div className="flex flex-col space-y-5">
                                <label htmlFor="email">
                                    <p className="font-medium text-slate-700 pb-2">Email address</p>
                                    <input id="email" name="email" type="email" value={email} onChange={(e)=>setEmailInput(e.target.value)} className="w-full py-3 border border-lime-400 rounded-lg px-3 focus:outline-none focus:border-lime-400 hover:shadow" placeholder="Enter email address" />
                                </label>
                                <button type="submit" className="w-full py-3 font-medium text-white bg-lime-400 hover:bg-lime-300 rounded-lg border-lime-400 hover:shadow inline-flex space-x-2 items-center justify-center">
                                    Reset password
                                </button>
                                <p className="text-center">Not registered yet? <a href="#" className="text-lime-400 font-medium inline-flex space-x-1 items-center"><span>Register now </span><span><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg></span></a></p>
                            </div>
                        </form>
                    </div>

                </div>
            </main>
        </>
    )
}