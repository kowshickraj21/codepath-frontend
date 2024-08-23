import { useContext, useEffect } from "react"
import React from 'react';
import { Navigate } from 'react-router-dom';
import { getToken } from '../functions/Token';
import { User, UserContext } from '../context';
import axios from "axios";


interface ProtectedRouteProps {
  element: React.ReactNode;
}


const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const { User, setUser } = useContext(UserContext);
  const authToken = getToken("authToken");

  useEffect(() => {
    if (!authToken) return;
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
      if (authToken && !User.name) {
        try {
          const user: User = await fetchUser(authToken); 
          setUser(user); 
        } catch (error) {
          console.error("Error fetching user:", error);
        }
      }
    }
  
    getUser(); 
  }, [authToken, User, setUser]); 

  if (!authToken) {
    return <Navigate to="/login" />;
  }
  
  

  return element;
};

export default ProtectedRoute;
