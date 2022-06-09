 import {Navigate, Outlet} from 'react-router-dom';
 import React from "react";

const PrivateRoute = ({component: Component, ...rest}) => {
    return(
        localStorage.getItem('authToken') ? (
            <Outlet />
        ) : (
            <Navigate to="/login" />
        )               

    );
};

export default PrivateRoute;