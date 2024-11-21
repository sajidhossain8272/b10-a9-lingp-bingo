import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { FaSpinner } from "react-icons/fa";


// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ element }) => {
  const [user, setUser] = useState(null); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); 
      setLoading(false); 
    });

    return () => unsubscribe(); 
  }, []);

  if (loading) {
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <FaSpinner className='animate-spin text-9xl' />
      </div>
    ); 
  }

  if (!user) {
    return <Navigate to='/Auth' replace />;
  }

  return element;
};

export default PrivateRoute;
