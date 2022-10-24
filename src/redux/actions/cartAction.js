import { getCartItems } from "../../common/cartServices";
import * as ActionType from "../actionTypes"

export const fetchCartData = () => {
  return async (dispatch) => {
    try {
      const res = await getCartItems()
      console.log("resCart", res);
      dispatch({ type: ActionType.FETCH_CART, payload: res.data })
    } catch (error) {
      console.log(error);
    }
  }
}

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