import React from "react";
import classes from "./Signup.module.css";

function Signup(props) {
    return (
        <div>
            <form className={`shadow ${classes.form}`}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        className="form-control"
                        id="name"
                        type={"text"}
                        placeholder="Enter your Name"
                    />
                </div>
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
                <button type="submit">Register</button>
                <p className="mt-3 text-center">
                    Already have an Account? :
                    <a
                        href="javascript:void(0)"
                        className="ml-2 link"
                        onClick={props.onLogin}
                    >
                        Login
                    </a>
                </p>
            </form>
        </div>
    );
}

export default Signup;
