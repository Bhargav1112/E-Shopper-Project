import * as ActionType from "../../actionTypes"

const initialState = {
  loading: false,
  error: "",
  products: []
}

const productReducerAdm = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FETCH_PRODUCTS:
      return {
        ...state,
        loading: false,
        error: "",
        products: action.payload
      }
    case ActionType.ADD_PRODUCTS:
      return {
        ...state,
        loading: false,
        error: "",
        products: state.products.concat(action.payload)
      }
    case ActionType.UPDATE_PRODUCTS:
      console.log("update", action.payload);
      return {
        ...state,
        loading: false,
        error: "",
        products: state.products.map(item => item.id === action.payload.id ? action.payload : item)
      }
    case ActionType.REMOVE_PRODUCTS:
      return {
        ...state,
        loading: false,
        error: "",
        products: state.products.filter(item => item.id !== action.payload)
      }
    case ActionType.LOADING_PRODUCT:
      return {
        ...state,
        loading: true,
        error: ""
      }
    case ActionType.ERROR_PRODUCT:
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    default:
      return state
  }
}

export default productReducerAdm