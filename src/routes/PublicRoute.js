import React from "react";
import { Redirect, Route } from "react-router-dom";
import { isLoggedIn } from "../utils/index";

function PublicRoute({ children, restricted = false, ...rest }) {
    return (
        <Route {...rest}>
            {isLoggedIn() && restricted ? <Redirect to={"/"} /> : children}
        </Route>
    );
}

export default PublicRoute;
