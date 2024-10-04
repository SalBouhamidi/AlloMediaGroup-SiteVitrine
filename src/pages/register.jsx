import { Link } from "react-router-dom"
export default function register() {
    return (
        <>
            <main className=" h-[100vh] flex justify-center items-center ">
                <div  className="bg-gray-50 font-[sans-serif] w-[80vw] sm:h-screen p-4 my-[10rem]">
                    <div className="text-center mb-12  ">
                        <a href="javascript:void(0)"><img
                            src="https://readymadeui.com/readymadeui.svg" alt="logo" className='w-40 inline-block' />
                        </a>
                    </div>
                    <div className="max-w-md w-full mx-auto border bg-white border-gray-300 rounded-2xl p-8">

                        <form className="">
                            <div className="space-y-6">
                                <div>
                                    <label className="text-gray-800 text-sm mb-2 block">Name</label>
                                    <input name="name" type="text" className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-lime-400" placeholder="Enter your name" />
                                </div>

                                <div>
                                    <label className="text-gray-800 text-sm mb-2 block">Email</label>
                                    <input name="email" type="text" className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-lime-400" placeholder="Enter email" />
                                </div>
                                <div className="">
                                    <label className="text-gray-800 text-sm mb-2 block ">Phone</label>
                                    <div className="flex !flex-row gap-2">
                                    <input name="name" type="text" className="text-gray-800 w-[30%] bg-white border border-gray-300 text-sm px-4 py-3 rounded-md outline-lime-400" placeholder="Country code" />
                                    <input name="name" type="text" className="text-gray-800  w-[70%] bg-white border border-gray-300  text-sm px-4 py-3 rounded-md outline-lime-400" placeholder="Phone number" /> </div>
                                </div>
                                <div>
                                    <label className="text-gray-800 text-sm mb-2 block">Password</label>
                                    <input name="password" type="password" className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-lime-400" placeholder="Enter password" />
                                </div>
                                <div>
                                    <label className="text-gray-800 text-sm mb-2 block">Confirm Password</label>
                                    <input name="cpassword" type="password" className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-lime-400" placeholder="Enter confirm password" />
                                </div>

                                <div className="flex items-center">
                                    <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-lime-400 focus:ring-lime-300 border-gray-300 rounded" />
                                    <label for="remember-me" className="text-gray-800 ml-3 block text-sm">
                                        I accept the <a href="javascript:void(0);" className="text-lime-400 font-semibold hover:underline ml-1">Terms and Conditions</a>
                                    </label>
                                </div>
                            </div>

                            <div className="!mt-12">
                                <button type="button" className="w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-lime-400 hover:bg-lime-400 focus:outline-none">
                                    Create an account
                                </button>
                            </div>
                            <p className="text-gray-800 text-sm mt-6 text-center">Already have an account? <Link to="/login" className="text-lime-400 font-semibold hover:underline ml-1">Login here</Link></p>
                        </form>
                    </div>
                </div>
            </main>
        </>
    )
}