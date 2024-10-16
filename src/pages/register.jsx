import  {Link}  from "react-router-dom"
import  {useForm}  from "react-hook-form";
import * as yup from "yup";
import axios from "axios";
import  {yupResolver}  from "@hookform/resolvers/yup";
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';



 function Register() {
    const navigate = useNavigate();
    const initialvalues = {
        name: '',
        email: '',
        password: '',
        phone:[{ countrycode: '', phonenumber: '' }]
    }
    const formValidation = yup.object().shape({
        name: yup.string().trim().min(3, 'name must be longer than 3 characters').required('Name can not be empty or less than 3 chars'),
        email: yup.string().trim().matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'please enter a valid email').required('a valid email is required'),
        password: yup.string().trim().required('please enter your password because it is required'),
        // cpassword: yup.string().trim().oneOf([yup.ref('password')], 'Passwords must match').required('Please confirm your password'),
        countrycode: yup.string().required('Country code is required'),
        phonenumber: yup.string().required('phone number is required')

    })

    const {register,handleSubmit , formState: {errors}} = useForm({
        resolver:yupResolver(formValidation),
        defaultValues: initialvalues
    })


    async function handleRegistration(data){
        data.phone=[{
            countrycode: data.countrycode,
            phonenumber: data.phonenumber
        }];
        console.log('test hshshshs', data);
        data = {
            name: data.name,
            email:data.email,
            phone: data.phone,
            password: data.password
        }

        try {
            const response = await axios.post('http://localhost:3000/api/auth/register', data);
            console.log('date response is ', response.data);
            toast.success('User registered successfully! Kindly check your email');
            navigate('/login');
        }catch(error){
            if(error.response && error.response.data){
                toast.error(error.response.data.message);
            }else{
                toast.error('smth bad happend ', error);
            }
        }
    }

    return (
        <>
            <main className=" h-[100vh] flex justify-center items-center ">
                <div  className="bg-gray-50 font-[sans-serif] w-[80vw] sm:h-screen p-4 my-[10rem]">
                    <div className="text-center mb-12  ">

                    </div>
                    <div className="max-w-md w-full mx-auto border bg-white border-gray-300 rounded-2xl p-8">

                        <form onSubmit={handleSubmit(handleRegistration)}>
                            <div className="space-y-6">
                                <div>
                                    <label className="text-gray-800 text-sm mb-2 block">Name</label>
                                    <input {...register('name')} name="name" type="text" className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-lime-400" placeholder="Enter your name" />
                                    {errors.name && <span className="text-red-500">{errors.name.message}</span>}
                                    
                                </div>


                                <div>
                                    <label className="text-gray-800 text-sm mb-2 block">Email</label>
                                    <input {...register('email')} name="email" type="text" className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-lime-400" placeholder="Enter email" />
                                    {errors.email && <span className="text-red-500">{errors.email.message}</span>}

                                </div>
                                <div className="">
                                    <label className="text-gray-800 text-sm mb-2 block ">Phone</label>
                                    <div className="flex !flex-row gap-2">
                                    <select {...register('countrycode')} name="countrycode" type="text" className="text-gray-800  w-[30%] bg-white border border-gray-300  text-sm px-4 py-3 rounded-md outline-lime-400" placeholder="Country code" > 
                                    <option value="">Select country code</option>
                                        <option value="+212">+212 (Morocco)</option>
                                        <option value="+1">+1 (US)</option>
                                        <option value="+44">+44 (UK)</option>
                                    </select>
                                    {errors.countrycode && <span className="text-red-500">{errors.countrycode.message}</span>}
                                    <input {...register('phonenumber')} name="phonenumber" type="text" className="text-gray-800  w-[70%] bg-white border border-gray-300  text-sm px-4 py-3 rounded-md outline-lime-400" placeholder="Phone number" /> 
                                    {errors.phonenumber && <span className="text-red-500">{errors.phonenumber.message}</span>}

                                    </div>
                                </div>
                                <div>
                                    <label className="text-gray-800 text-sm mb-2 block">Password</label>
                                    <input {...register("password")} name="password" id="password" type="password" className="text-gray-800 bg-white border border-gray-300 w-full text-sm px-4 py-3 rounded-md outline-lime-400" placeholder="Enter password" />
                                    {errors.password && <span className="text-red-500">{errors.password.message}</span>}

                                </div>
 

                                <div className="flex items-center">
                                    <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 shrink-0 text-lime-400 focus:ring-lime-300 border-gray-300 rounded" />
                                    <label htmlFor="remember-me" className="text-gray-800 ml-3 block text-sm">
                                        I accept the <a href="#" className="text-lime-400 font-semibold hover:underline ml-1">Terms and Conditions</a>
                                    </label>
                                </div>
                                
                            </div>

                            <div className="!mt-12">
                                <button  type="submit" className="w-full py-3 px-4 text-sm tracking-wider font-semibold rounded-md text-white bg-lime-400 hover:bg-lime-400 focus:outline-none">
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
};
export {Register}
