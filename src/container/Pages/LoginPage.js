import React, { useState } from "react";
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

    const displayForm =
        user === "login" ? (
            <Login onSignup={onSignup} />
        ) : (
            <Signup onLogin={onLogin} />
        );
    return (
        <>
            <div className="container">
                <div className="heading py-4">
                    <h1 className="text-center">
                        {user === "login" ? "Login" : "Signup"}
                    </h1>
                </div>
            </div>
            {displayForm}
        </>
    );
}

export default LoginPage;
