import * as ActionType from "../actionTypes"

export const addCartData = data => {
  return async (dispatch) => {
    dispatch({ type: ActionType.ADD_CART_ITEM, payload: data })
  }
}
export const removeCartData = data => {
  return async (dispatch) => {
    dispatch({ type: ActionType.REMOVE_CART_ITEM, payload: data })
  }
}
export const deleteCartData = data => {
  return async (dispatch) => {
    dispatch({ type: ActionType.DELETE_CART_ITEM, payload: data })
  }
}