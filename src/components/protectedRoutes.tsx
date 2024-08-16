import React from 'react';
import { Navigate } from 'react-router-dom';
import getCookie from '../functions/getCookie';

interface ProtectedRouteProps {
  element: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const authToken = getCookie("authToken");

  if (!authToken) {
    return <Navigate to="/login" />;
  }

  return element;
};

export default ProtectedRoute;
