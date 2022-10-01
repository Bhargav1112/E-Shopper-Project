import * as ActionType from "../../actionTypes"

const initialState = {
  categoryList: [],
  loading: false,
  error: ""
}

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FETCH_CATEGORY:
      return {
        ...state,
        categoryList: action.payload,
        loading: false,
        error: ""
      }
    case ActionType.ADD_CATEGORY:
      return {
        ...state,
        categoryList: [...state.categoryList, action.payload],
        loading: false,
        error: ""
      }
    case ActionType.REMOVE_CATEGORY:
      return {
        ...state,
        categoryList: state.categoryList.filter(item => item.id !== action.payload),
        loading: false,
        error: ""
      }
    case ActionType.UPDATE_CATEGORY:
      return {
        ...state,
        categoryList: state.categoryList.map(item => item.id === action.payload.id ? action.payload : item),
        loading: false,
        error: ""
      }
    case ActionType.LOADINGCATEGORY:
      return {
        ...state,
        loading: true,
        error: ""
      }
    case ActionType.ERRORCATEGORY:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}

export default categoryReducer