import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserAuthContext } from '../Context/AuthContext';

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useContext(UserAuthContext);
    if (loading) return <h1>LOADING</h1>
    if (user) return children
    return <Navigate to={'/login'} state={{ from: location }} replace />
};

export default PrivateRoute;