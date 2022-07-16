import React from "react";
import { useHistory } from "react-router-dom";
import classes from "./Login.module.css";

function Login(props) {
    const history = useHistory();

    const submitHandler = (event) => {
        event.preventDefault();
        localStorage.setItem("user", "1");
        history.push(history.location.state?.path || "/");
    };
    return (
        <form className={`shadow ${classes.form}`} onSubmit={submitHandler}>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                    className="form-control"
                    id="email"
                    type={"text"}
                    placeholder="Enter your email"
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                    className="form-control"
                    id="password"
                    type={"password"}
                    placeholder="Password"
                />
            </div>
            <button type="submit">Login</button>
            <p className="mt-3 text-center">
                Create an Account:
                <a
                    href="javascript:void(0)"
                    className="ml-2 link"
                    onClick={props.onSignup}
                >
                    Sign up
                </a>
            </p>
        </form>
    );
}

export default Login;
