// src/components/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom'; // Replaced Redirect with Navigate
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children }) => { // Changed to accept children
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
