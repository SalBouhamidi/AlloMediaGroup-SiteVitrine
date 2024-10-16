import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'sonner';


export default function EmailVerification(){
    const { userId, token } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function verifyToken (){
            try {
                const response = await axios.get(`http://localhost:3000/api/auth/verify-user/${userId}/${token}`);
                toast.success(response.data.message);
                navigate('/login'); 
            } catch (error) {
                console.log('error validation token',error);
                toast.error('Verification failed, Your token is expired or not valid. Please try again.');
            }
        };

        verifyToken();
    }, [userId, token, navigate]);

    return (
        <>
        <div>Verifying your account...</div>;
        </>
    )
}