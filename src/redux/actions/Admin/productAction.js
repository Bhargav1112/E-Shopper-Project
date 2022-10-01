import * as ActionType from "../../actionTypes"
import { collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { db, storage } from "../../../firebase"
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";


export const getProductAction = () => {
  return async (dispatch) => {
    try {
      dispatch(loadingProduct())
      const res = await getDocs(collection(db, "products"))
      const data = []
      res.forEach(item => {
        data.push({ id: item.id, ...item.data() })
      })
      dispatch({ type: ActionType.FETCH_PRODUCTS, payload: data })
    } catch (error) {
      dispatch(errorProduct(error.message))
    }
  }
}

export const addProductAction = data => {
  return async (dispatch) => {
    try {
      const imageName = Math.floor(Math.random() * 100000).toString()
      dispatch(loadingProduct())
      const imageRef = ref(storage, `products/${imageName}`);
      const snapshot = await uploadBytes(imageRef, data.image)
      const imgUrl = await getDownloadURL(snapshot.ref)

      const categoryRef = await addDoc(collection(db, "products"), { ...data, imageName, image: imgUrl });

      dispatch({ type: ActionType.ADD_PRODUCTS, payload: { ...data, imageName, image: imgUrl, id: categoryRef.id } })
    } catch (error) {
      dispatch(errorProduct(error.message))
    }
  }
}

export const removeProductAction = data => {
  return async (dispatch) => {
    try {
      dispatch(loadingProduct())
      const imageRef = ref(storage, `products/${data.imageName}`);
      await deleteObject(imageRef)
      await deleteDoc(doc(db, "products", data.id));
      dispatch({ type: ActionType.REMOVE_PRODUCTS, payload: data.id })
    } catch (error) {
      dispatch(errorProduct(error.message))
    }
  }
}

export const updateProductAction = data => {
  return async (dispatch) => {
    try {
      dispatch(loadingProduct())
      if (typeof data.image === "string") {
        await updateDoc(doc(db, "products", data.id), { ...data });
        dispatch({ type: ActionType.UPDATE_PRODUCTS, payload: { ...data } })
        console.log("data", data);
      } else {
        console.log("updateData", data);
        const imageName = Math.floor(Math.random() * 100000).toString()
        const imageRef = ref(storage, `products/${data.imageName}`);
        await deleteObject(imageRef)
        const newImageRef = ref(storage, `products/${imageName}`)
        const snapshot = await uploadBytes(newImageRef, data.image)
        const imageUrl = await getDownloadURL(snapshot.ref)
        await updateDoc(doc(db, "products", data.id), { ...data, imageName, image: imageUrl })
        dispatch({ type: ActionType.UPDATE_PRODUCTS, payload: { ...data, imageName, image: imageUrl } })
      }
    } catch (error) {
      dispatch(errorProduct(error.message))
    }
  }
}

const loadingProduct = () => {
  return dispatch => {
    dispatch({ type: ActionType.LOADING_PRODUCT })
  }
}

const errorProduct = message => {
  return dispatch => {
    dispatch({ type: ActionType.ERROR_PRODUCT, payload: message })
  }
} 