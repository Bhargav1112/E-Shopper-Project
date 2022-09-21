import * as ActionType from "../actionTypes"

const initialState = {
  user: null,
  token: localStorage.getItem('user') || "",
  loading: false,
  error: ''
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SIGNUP:
      return {
        ...state,
        loading: false,
        error: '',
        user: action.payload.user,
        token: action.payload.token
      }
    case ActionType.SIGNIN:
      return {
        ...state,
        loading: false,
        error: '',
        user: action.payload.user,
        token: action.payload.token
      }
    case ActionType.SIGNOUT:
      return {
        ...state,
        loading: false,
        error: '',
        user: null,
        token: ''
      }
    case ActionType.FORGOTPASSWORD:
      return {
        ...state,
        loading: false,
        error: '',
      }
    case ActionType.LOADINGAUTH:
      return {
        ...state,
        loading: true,
        error: '',
      }
    case ActionType.ERRORAUTH:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export default authReducer;