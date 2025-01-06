import React from "react";
import {Route,Navigate} from "react-router-dom"
import {isAuthenticated} from "./index"

const PrivateRoute = ({ children }) => {
    return isAuthenticated() ? children : <Navigate to="/signin" />;
};

export default PrivateRoute