import * as ActionType from "../actionTypes"
import { collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { db, storage } from "../../firebase"
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";


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
      const imageRef = ref(storage, `category/${data.imageName}`);
      await deleteObject(imageRef)
      await deleteDoc(doc(db, "category", data.id));
      dispatch({ type: ActionType.REMOVE_CATEGORY, payload: data.id })
    } catch (error) {
      dispatch(errorCategory(error.message))
    }
  }
}

export const updateCategoryAction = data => {
  return async (dispatch) => {
    try {
      dispatch(loadingCategory())
      if (typeof data.img === "string") {
        await updateDoc(doc(db, "category", data.id), { ...data });
        dispatch({ type: ActionType.UPDATE_CATEGORY, payload: { ...data } })
        console.log("data", data);
      } else {
        const imageName = Math.floor(Math.random() * 100000).toString()
        const imageRef = ref(storage, `category/${data.imageName}`);
        await deleteObject(imageRef)
        const newImageRef = ref(storage, `category/${imageName}`)
        const snapshot = await uploadBytes(newImageRef, data.img)
        const imageUrl = await getDownloadURL(snapshot.ref)
        await updateDoc(doc(db, "category", data.id), { ...data, imageName, img: imageUrl })
        dispatch({ type: ActionType.UPDATE_CATEGORY, payload: { ...data, imageName, img: imageUrl } })
      }
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