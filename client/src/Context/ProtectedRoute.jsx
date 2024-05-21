import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';

const ProtectedRoute = ({ children }) => {
  const { authUser } = useAuth();

  return authUser ? children : <Navigate to="/signup" />;
};

export default ProtectedRoute;
