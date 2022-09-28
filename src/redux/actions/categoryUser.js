import { collection, getDocs } from "firebase/firestore"
import { db } from "../../firebase"
import * as ActionType from "../actionTypes"

export const getCategoriesData = () => {
  return async (dispatch) => {
    try {
      dispatch(loadingCategory())
      const res = await getDocs(collection(db, "category"))
      const data = []
      res.forEach(item => {
        data.push({ id: item.id, ...item.data() })
      })
      dispatch({ type: ActionType.FETCH_CATEGORY_SITE, payload: data })
    } catch (error) {
      dispatch(errorCategory(error.message))
    }
  }
}

const loadingCategory = () => {
  return dispatch => {
    dispatch({ type: ActionType.LOADING_CATEGORY_SITE })
  }
}

const errorCategory = message => {
  return dispatch => {
    dispatch({ type: ActionType.ERROR_CATEGORY_SITE, payload: message })
  }
}