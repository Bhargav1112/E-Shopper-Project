import { combineReducers } from "redux";
import categoryReducer from "./Admin/categoryReducer";
import productReducerAdm from "./Admin/productReducer";
import authReducer from "./authReducer";
import categoryUserReducer from "./categoryReducerUser";
import productReducer from "./productReducer"
import cartReducer from "./cartReducer"

const rootReducer = combineReducers({
  auth: authReducer,
  category: categoryReducer,
  categoryUserReducer,
  productReducerAdm,
  productReducer,
  cartReducer
})

export default rootReducer;