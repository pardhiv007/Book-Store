import React from "react";
import {Route,Navigate} from "react-router-dom"
import {isAuthenticated} from "./index"

const AdminRoute = ({ children }) => {
    return isAuthenticated() && isAuthenticated().user.role===1 ? children : <Navigate to="/signin" />;
};

export default AdminRoute