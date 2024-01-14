import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRout = () => {
    const user = JSON.parse(localStorage.getItem("user"))
    const isAuthenticated = user && user.token;

    return isAuthenticated ? <Outlet/> : (<Navigate to="/login" replace />);
}
export default PrivateRout
