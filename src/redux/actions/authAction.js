import { createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase";
import * as ActionType from "../actionTypes"
import { history } from "../store";


export const signUpAction = data => {
  return async (dispatch) => {
    try {
      dispatch(loadingAuth())
      const userCredential = await createUserWithEmailAndPassword(auth, data.email, data.password)
      const user = userCredential.user;
      const token = user.accessToken
      await sendEmailVerification(auth.currentUser)
      localStorage.setItem('user', token)
      localStorage.setItem('loggedInUser', JSON.stringify(user))
      history.replace("/")
      dispatch({ type: ActionType.SIGNUP, payload: { user, token } })
    } catch (error) {
      const errorMessage = error.message;
      dispatch(errorAuth(errorMessage))

    }
  }
}

export const signInAction = data => {
  return async (dispatch) => {
    try {
      dispatch(loadingAuth())
      const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password)
      const user = userCredential.user;
      const token = user.accessToken

      if (user.emailVerified) {
        localStorage.setItem('user', token)
        localStorage.setItem('loggedInUser', JSON.stringify(user))
        history.replace("/")
        dispatch({ type: ActionType.SIGNIN, payload: { user, token } })
      } else {
        throw new Error("Please verify your email first.")
      }
    } catch (error) {
      const errorMessage = error.message;
      dispatch(errorAuth(errorMessage))
    }
  }
}

export const signOutAction = () => {
  return async (dispatch) => {
    try {
      dispatch(loadingAuth())
      await signOut(auth)
      dispatch({ type: ActionType.SIGNOUT })
      localStorage.clear()
      history.replace("/")
    } catch (error) {
      dispatch(errorAuth(error.message))
    }
  }
}

export const googleSigninAction = () => {
  return (dispatch) => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        localStorage.setItem('user', token)
        localStorage.setItem('loggedInUser', JSON.stringify(user))
        history.replace("/")
        dispatch({ type: ActionType.SIGNIN, payload: { user, token } })
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        dispatch(errorAuth(errorMessage))
      });
  }
}

export const forgotPasswordAction = email => {
  return async (dispatch) => {
    try {
      dispatch(loadingAuth())
      await sendPasswordResetEmail(auth, email)
      dispatch({ type: ActionType.FORGOTPASSWORD })
      history.replace("/login")
    } catch (error) {
      dispatch(errorAuth(error.message))
    }
  }
}

export const loadingAuth = () => {
  return dispatch => {
    dispatch({ type: ActionType.LOADINGAUTH })
  }
}

export const errorAuth = message => {
  return dispatch => {
    dispatch({ type: ActionType.ERRORAUTH, payload: message })
  }
}