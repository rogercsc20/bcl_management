import React from 'react';
import { Navigate } from 'react-router-dom';
import { isTokenExpired } from '../utils/tokenUtils';

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem('access_token');
    const isAuthenticated = token && !isTokenExpired(token);

    return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;

