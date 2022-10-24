import * as ActionType from "../../actionTypes"


const initialState = {
  loading: false,
  order: [],
  error: null
}

const orderReducerAdm = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FETCH_ORDER_ADM:
      return {
        ...state,
        loading: false,
        error: null,
        order: action.payload
      }
    default:
      return state
  }
}

export default orderReducerAdm