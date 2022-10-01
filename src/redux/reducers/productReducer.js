import * as ActionType from "../actionTypes"

const initialState = {
  loading: false,
  error: "",
  products: []
}

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FETCH_PRODUCT_SITE:
      return {
        ...state,
        loading: false,
        error: "",
        products: action.payload
      }
    case ActionType.LOADING_PRODUCT_SITE:
      return {
        ...state,
        loading: true,
        error: ""
      }
    case ActionType.ERROR_PRODUCT_SITE:
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    default:
      return state
  }
}

export default productReducer