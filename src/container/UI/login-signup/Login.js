import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { googleSigninAction, signInAction } from "../../../redux/actions/authAction";
import { FcGoogle } from 'react-icons/fc';
import classes from "./Login.module.css";
import Loader from "../Loader/Loader";

function Login(props) {

    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)

    const [formData, setFormData] = useState({ email: "", password: "" })
    const [error, setError] = useState({ email: "", password: "" })

    const handleChange = e => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
        if (name === "email") {
            if (value) {
                setError({ ...error, email: "" })
            } else {
                setError({ ...error, email: "This field is required." })
            }
        }
        if (name === "password") {
            if (value) {
                setError({ ...error, password: "" })
            } else {
                setError({ ...error, password: "This field is required." })
            }
        }
    }

    const handleGoogle = () => {
        dispatch(googleSigninAction())
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if (!formData.email || !formData.password) return;
        dispatch(signInAction(formData))
        setFormData({ email: "", password: "" })
        setError({ email: "", password: "" })
    };
    return (
        <>
            {
                auth.loading ?
                    <Loader />
                    :
                    <form className={`shadow ${classes.form}`} onSubmit={submitHandler}>
                        {auth.error && <p className="error-message">{auth.error}</p>}
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                className="form-control"
                                id="email"
                                value={formData.email}
                                type={"text"}
                                placeholder="Enter your email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleChange}
                            />
                            {error.email && <p className="error-message">{error.email}</p>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input
                                className="form-control"
                                id="password"
                                type={"password"}
                                value={formData.password}
                                placeholder="Password"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleChange}
                            />
                            {error.password && <p className="error-message">{error.password}</p>}
                        </div>
                        <div className={classes["forgot-password"]}>
                            <p onClick={props.onForgotPassword}>Forgot Password?</p>
                        </div>
                        <div className="action">
                            <button type="submit">Login</button>
                        </div>
                        <div className="action text-center">
                            <button type="button" onClick={handleGoogle}> <FcGoogle /> Signin with Google</button>
                        </div>
                        <p className="mt-3 text-center">
                            Create an Account:
                            <p className={`ml-2 link d-inline-block text-primary ${classes["sign-up"]}`} onClick={props.onSignup} >
                                Sign up
                            </p>
                        </p>
                    </form>
            }
        </>
    );
}

export default Login;