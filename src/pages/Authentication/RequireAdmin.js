import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../components/Shared/Loading';
import auth from '../../firebase_init';
import useAdmin from '../../hooks/useAdmin';

const RequireAdmin = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user)
    const location = useLocation();
    if (loading || adminLoading) {
        return <Loading></Loading>
    }

    if (!user || !admin) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default RequireAdmin;