import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPasswordAction } from '../../../redux/actions/authAction';
import classes from "./forgotPassword.module.css"

function ForgotPassword(props) {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)

  const handleChange = e => {
    setEmail(e.target.value)
    if (!e.target.value) {
      setEmailError("This field is required.")
    } else {
      setEmailError('')
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (emailError) return
    dispatch(forgotPasswordAction(email))
    if (!auth.error && !auth.loading) {
      setEmail("")
      props.setUser("login")
    }
  }

  return (
    <div >
      {auth.loading ? (
        <h5 className='text-center'>Loading...</h5>
      ) : (
        <form className={`shadow ${classes.form}`} onSubmit={handleSubmit}>
          {auth.error && <p className="error-message">{auth.error}</p>}
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              className="form-control"
              id="email"
              value={email}
              type={"text"}
              placeholder="Enter your email"
              name="email"
              onChange={handleChange}
              onBlur={handleChange}
            />
            {emailError && <p className="error-message">{emailError}</p>}
          </div>
          <button type="submit">Submit</button>
        </form>
      )
      }

    </div>
  );
}

export default ForgotPassword;