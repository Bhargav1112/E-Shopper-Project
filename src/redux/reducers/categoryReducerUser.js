import * as ActionType from "../actionTypes"

const initialValue = {
  loading: false,
  categories: [],
  error: ""
}

const categoryUserReducer = (state = initialValue, action) => {
  switch (action.type) {
    case ActionType.FETCH_CATEGORY_SITE:
      return {
        ...state,
        loading: false,
        categories: action.payload,
        error: ""
      }
    case ActionType.LOADING_CATEGORY_SITE:
      return {
        ...state,
        loading: true,
        error: ""
      }
    case ActionType.ERROR_CATEGORY_SITE:
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    default:
      return state
  }
}

export default categoryUserReducer