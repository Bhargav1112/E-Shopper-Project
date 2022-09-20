import React from "react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { googleSigninAction, signUpAction } from "../../../redux/actions/authAction";
import classes from "./Signup.module.css";

function Signup(props) {
    const [formData, setFormData] = useState({ name: "", email: "", password: "" })
    const [error, setError] = useState({ name: "", email: "", password: "" })
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)

    const handleChange = e => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })

        if (name === "name") {
            if (value) {
                setError({ ...error, name: "" })
            } else {
                setError({ ...error, name: "This field is required." })
            }
        }
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

    const handleSubmit = e => {
        e.preventDefault()
        if (!formData.name || !formData.email || !formData.password) return;
        dispatch(signUpAction(formData))
        setFormData({ name: "", email: "", password: "" })
        setError({ name: "", email: "", password: "" })
    }

    return (
        <div>
            {auth.loading ?
                <h5 style={{ textAlign: "center" }}>Loading</h5>
                :

                <form className={`shadow ${classes.form}`} onSubmit={handleSubmit}>
                    {auth.error && <p className="error-message">{auth.error}</p>}
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            className="form-control"
                            id="name"
                            name="name"
                            type={"text"}
                            placeholder="Enter your Name"
                            value={formData.name}
                            onChange={handleChange}
                            onBlur={handleChange}
                        />
                        {error.name && <p className="error-message">{error.name}</p>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            className="form-control"
                            id="email"
                            type={"text"}
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
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
                            name="password"
                            placeholder="Password"
                            value={formData.password}
                            onChange={handleChange}
                            onBlur={handleChange}
                        />
                        {error.password && <p className="error-message">{error.password}</p>}
                    </div>
                    <div className="action text-center">
                        <button type="submit">Register</button>
                    </div>
                    <div className="action text-center">
                        <button type="button" onClick={handleGoogle}> <FcGoogle /> Signin with Google</button>
                    </div>
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
            }
        </div>
    );
}

export default Signup;