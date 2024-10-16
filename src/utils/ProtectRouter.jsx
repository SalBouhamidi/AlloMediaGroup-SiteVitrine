import { useNavigate } from 'react-router-dom';
import {useEffect} from "react"
import { toast } from 'sonner';

const ProtectedRoute = ({ element }) => {
    const   navigate = useNavigate();

  const isAuthenticated = localStorage.getItem('email');
  useEffect(() => {
    if (!isAuthenticated) {
      toast.error('You can not access the profil page, please login and try again')
      navigate('/login'); 
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? element : null; 
};


export default ProtectedRoute;
