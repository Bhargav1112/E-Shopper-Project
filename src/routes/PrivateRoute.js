import React from "react";
import { Redirect, Route } from "react-router-dom";
import { isLoggedIn } from "../utils/index";

function PrivateRoute({ children, ...rest }) {
    return (
        <Route {...rest}>
            {isLoggedIn() ? children : <Redirect to={"/login"} />}
        </Route>
    );
}

export default PrivateRoute;
