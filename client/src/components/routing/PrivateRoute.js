 import {Navigate, Route} from 'react-router-dom';
 import React from "react";

const PrivateRoute = ({component: Component, ...rest}) => {
    return(
        <Route 
           {...rest} 
            render = {
                (props) => 
                    localStorage.getItem('authToken') ? (
                        <Component {...props} />
                    ) : (
                       <Navigate to="/login" />
                    )
                
            }
        />
    )
}

export default PrivateRoute