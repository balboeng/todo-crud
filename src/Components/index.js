import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuthState } from '../Context' //Importo estado de atentificacion
 
const AppRoutes = ({ component: Component, path, isPrivate, ...rest }) => {
 
    // Detalles del usuario
    const userDetails = useAuthState()
    return (
        <Route
            path={path}
            render={props =>
                isPrivate && !Boolean(userDetails.token) ? (
                    <Redirect
                        to={{ pathname: "/login" }}
                    />
                ) : (
                        <Component {...props} />
                    )
            }
            {...rest}
        />
    )
}
 
export default AppRoutes