import {useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";



export default function verificationOTP() {
    let urlparams = useParams();
    const [firstNumber, setfirstNumber] = useState('');
    const [secondNumber, setsecondNumber] = useState('');
    const [thirdNumber, setthirdNumber] = useState('');
    const [fourNumber, setfourNumber] = useState('');
    const [message, setMessage] = useState('');  
    const [otpError, setOtpError] = useState(null);



        async function handleOTP(e){
            // console.log(urlparams);
            e.preventDefault(); 
            let otpcode = `${firstNumber}${secondNumber}${thirdNumber}${fourNumber}`;
            // console.log(urlparams.otp);
            // console.log('url parameeee',code);
            // console.log('url parameeee encoded',atob(urlparams.otp));
            // console.log(optcode);

            try{
                console.log('user id', urlparams.id)
                let results = await axios.post(`http://localhost:3000/api/auth/verify-otp/${urlparams.id}/${urlparams.otp}`,{otpcode} );
                setMessage(results.request.response);
                console.log(results.request.response)
            }catch(err){
                console.log('there\'s an error in otp', err);
                console.log('there\'s an error in otp', err.request.response);

            }
        }



    return (
        <>
            <>
                <main className=" h-[100vh] flex justify-center items-center ">
                    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
                        <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
                            <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
                                <div className="flex flex-col items-center justify-center text-center space-y-2">
                                    <div className="font-semibold text-3xl">
                                        <p>Email Verification</p>
                                    </div>
                                    <div className="flex flex-row text-sm font-medium text-gray-400">
                                        <p>We have sent a code to your email ba**@dipainhouse.com</p>
                                    </div>
                                </div>
                                <div>
                                    <form onSubmit={handleOTP}>
                                        <div className="flex flex-col space-y-16">
                                            <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                                                <div className="w-16 h-16 ">
                                                    <input onChange={(e)=>setfirstNumber(e.target.value)} className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-lime-400" type="text" name="firstNumber" id="firstNumber" />
                                                </div>
                                                <div className="w-16 h-16 ">
                                                    <input onChange={(e)=>setsecondNumber(e.target.value)} className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-lime-400" type="text" name="secondNumber" id="secondNumber" />
                                                </div>
                                                <div className="w-16 h-16 ">
                                                    <input onChange={(e)=>setthirdNumber(e.target.value)} className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-lime-400" type="text" name="thirdNumber" id="thirdNumber" />
                                                </div>
                                                <div className="w-16 h-16 ">
                                                    <input onChange={(e)=>setfourNumber(e.target.value)} className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-lime-400" type="text" name="fourNumber" id="fourNumber" />
                                                </div>
                                            </div>

                                            <div className="flex flex-col space-y-5">
                                                <div>
                                                    <button className="flex flex-row items-center justify-center text-center w-full border rounded-xl bg-lime-400 outline-none py-5 bg-lime-ring-lime-400 border-none text-white text-sm shadow-sm">
                                                        Verify Account
                                                    </button>
                                                </div>

                                                <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                                                    <p>Didn't recieve code?</p> <a className="flex flex-row items-center text-lime-400" href="http://" target="_blank" rel="noopener noreferrer">Resend</a>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

            </>
        </>
    )
}