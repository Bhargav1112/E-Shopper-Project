import * as ActionType from "../actionTypes"
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db, storage } from "../../firebase"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";


export const getCategoryAction = () => {
  return async (dispatch) => {
    try {
      dispatch(loadingCategory())
      const res = await getDocs(collection(db, "category"))
      const data = []
      res.forEach(item => {
        data.push({ id: item.id, ...item.data() })
      })
      dispatch({ type: ActionType.FETCH_CATEGORY, payload: data })
    } catch (error) {
      dispatch(errorCategory(error.message))
    }
  }
}

export const addCategoryAction = data => {
  return async (dispatch) => {
    try {
      const imageName = Math.floor(Math.random() * 100000).toString()
      dispatch(loadingCategory())
      const imageRef = ref(storage, `category/${imageName}`);
      const snapshot = await uploadBytes(imageRef, data.img)
      const imgUrl = await getDownloadURL(snapshot.ref)

      const categoryRef = await addDoc(collection(db, "category"), { ...data, imageName, img: imgUrl });
      dispatch({ type: ActionType.ADD_CATEGORY, payload: { ...data, imageName, img: imgUrl, id: categoryRef.id } })
    } catch (error) {
      dispatch(errorCategory(error.message))
    }
  }
}

export const removeCategoryAction = data => {
  return async (dispatch) => {
    try {
      dispatch(loadingCategory())
    } catch (error) {
      dispatch(errorCategory(error.message))
    }
  }
}

export const updateCategoryAction = data => {
  return async (dispatch) => {
    try {
      dispatch(loadingCategory())
    } catch (error) {
      dispatch(errorCategory(error.message))
    }
  }
}

const loadingCategory = () => {
  return dispatch => {
    dispatch({ type: ActionType.LOADINGCATEGORY })
  }
}

const errorCategory = message => {
  return dispatch => {
    dispatch({ type: ActionType.ERRORCATEGORY, payload: message })
  }
}