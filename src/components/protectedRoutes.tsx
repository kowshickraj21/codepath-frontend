import { useContext, useEffect } from "react"
import React from 'react';
import { Navigate } from 'react-router-dom';
import getCookie from '../functions/getCookie';
import { User, UserContext } from '../context';
import axios from "axios";


interface ProtectedRouteProps {
  element: React.ReactNode;
}


const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const { User, setUser } = useContext(UserContext);

  const authToken = getCookie("authToken");

  if (!authToken) {
    return <Navigate to="/login" />;
  }
  
  useEffect(() => {
    async function fetchUser(token: string): Promise<User> {
      const res = await axios.get<User>(
        `http://localhost:3050/user`,
        {
          params: {
            token: token,
          },
        }
      );
      return res.data;
    }
  
    async function getUser() {
      if (authToken && Object.keys(User).length === 0) {
        try {
          const user: User = await fetchUser(authToken); 
          setUser(user); 
        } catch (error) {
          console.error("Error fetching user:", error);
        }
      }
    }
  
    getUser(); 
  }, []); 
  

  return element;
};

export default ProtectedRoute;
