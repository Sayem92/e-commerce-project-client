import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../components/Loading/Loading';
import { AuthContext } from '../Context/UserContext';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>;
    }

    return children;
};

export default PrivateRoutes;