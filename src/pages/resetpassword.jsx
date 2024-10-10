import {useState} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function resetpassword() {
    let urlparams = useParams();
    // console.log(urlparams.id);

    let [password, setPassword] = useState('');
    let [confirmPassword, setconfirmePassword] = useState('');


    async function handleResetPassword(e){
        e.preventDefault();
        console.log('****', password);
        if(password !== confirmPassword){
            console.log('The password is not confirmed');
            return;
        }else{
            let response = await axios.post(`http://localhost:3000/api/auth/resetpassword/${urlparams.id}/${urlparams.token}`,{
                'password': password,
                'confirmPassword': confirmPassword
            })
            console.log('response is ', response.data.message);
        }

    }

    return (
        <>
            <main className=" h-[100vh] flex justify-center items-center ">
                <div className="bg-gray-50 font-[sans-serif] w-[70vw]">
                    <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
                        <h1 className="text-4xl font-medium text-center">Reset password</h1>
                        <form onSubmit={handleResetPassword} className="my-10">
                            <div className="flex flex-col space-y-5">
                                <div className="relative flex flex-col items-start">
                                    <label className="text-gray-800 text-sm  block"> New Password</label>
                                    <input name="password" value={password}  onChange={(e)=> setPassword(e.target.value)} type="password" className="w-full text-gray-800 text-sm border border-lime-400 px-4 py-3 rounded-md outline-lime-400" placeholder="Enter password" />
                                </div>
                                <div className="relative flex flex-col items-start">
                                    <label className="text-gray-800 text-sm  block"> Confirm yourPassword</label>
                                    <input name="password" value={confirmPassword} onChange={(e) => setconfirmePassword(e.target.value)} type="password" className="w-full text-gray-800 text-sm border border-lime-400 px-4 py-3 rounded-md outline-lime-400" placeholder="Enter password" />
                                </div>
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