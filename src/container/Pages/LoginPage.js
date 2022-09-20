import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { errorAuth } from "../../redux/actions/authAction";
import ForgotPassword from "../UI/login-signup/ForgotPassword";
import Login from "../UI/login-signup/Login";
import Signup from "../UI/login-signup/Signup";

function LoginPage(props) {
    const [user, setUser] = useState("login");
    const dispatch = useDispatch()

    document.title = "E-shopper-Login";

    const onSignup = () => {
        setUser("signup");
        dispatch(errorAuth(""))
    };

    const onLogin = () => {
        setUser("login");
        dispatch(errorAuth(""))
    };

    const onForgotPassword = () => {
        setUser("forgot")
        dispatch(errorAuth(""))
    }

    const displayForm =
        user === "login" ? (
            <Login onSignup={onSignup} onForgotPassword={onForgotPassword} />
        ) : (
            user === "forgot" ? (
                <ForgotPassword setUser={setUser} />
            ) : (
                <Signup onLogin={onLogin} />
            )
        );
    return (
        <>
            <div className="container">
                <div className="heading py-4">
                    <h1 className="text-center">
                        {user === "login" ? "Login" : user === "forgot" ? "Forgot Password" : "Signup"}
                    </h1>
                </div>
            </div>
            {displayForm}
        </>
    );
}

export default LoginPage;
