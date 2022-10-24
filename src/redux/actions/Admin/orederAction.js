import * as ActionType from "../../actionTypes"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../../../firebase"

export const getOrderAdmin = () => {
  return async (dispatch) => {
    const res = await getDocs(collection(db, "orders"))
    const data = []
    res.forEach(item => {
      data.push({ id: item.id, ...item.data() })
    })
    console.log("orderData", data);
    dispatch({ type: ActionType.FETCH_ORDER_ADM, payload: data })
  }
}