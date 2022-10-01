import { collection, getDocs } from "firebase/firestore"
import { db } from "../../firebase"
import * as ActionType from "../actionTypes"

export const fetchProductsData = () => {
  return async (dispatch) => {
    try {
      dispatch(loadingProduct())
      const res = await getDocs(collection(db, "products"))
      const data = []
      res.forEach(item => {
        data.push({ id: item.id, ...item.data() })
      })
      dispatch({ type: ActionType.FETCH_PRODUCT_SITE, payload: data })
    } catch (error) {
      dispatch(errorProduct(error.message))
    }
  }
}

const loadingProduct = () => {
  return dispatch => {
    dispatch({ type: ActionType.LOADING_PRODUCT_SITE })
  }
}

const errorProduct = message => {
  return dispatch => {
    dispatch({ type: ActionType.ERROR_PRODUCT_SITE, payload: message })
  }
}