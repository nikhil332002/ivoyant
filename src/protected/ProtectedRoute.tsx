import React from 'react';
import { Navigate } from 'react-router-dom';

// Simulating an authentication function
const isAuthenticated = () => {
   return true 
};

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  return isAuthenticated() ? <>{children}</> : <Navigate to="/login" />;
};

export default ProtectedRoute;
