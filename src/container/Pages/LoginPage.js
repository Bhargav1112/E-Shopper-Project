import React, { useState } from "react";
import ForgotPassword from "../UI/login-signup/ForgotPassword";
import Login from "../UI/login-signup/Login";
import Signup from "../UI/login-signup/Signup";

function LoginPage(props) {
    const [user, setUser] = useState("login");

    document.title = "E-shopper-Login";

    const onSignup = () => {
        setUser("signup");
    };

    const onLogin = () => {
        setUser("login");
    };

    const onForgotPassword = () => {
        setUser("forgot")
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
