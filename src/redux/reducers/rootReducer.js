import { combineReducers } from "redux";
import authReducer from "./authReducer";
import categoryReducer from "./categoryReducer";
import categoryUserReducer from "./categoryReducerUser";

const rootReducer = combineReducers({
  auth: authReducer,
  category: categoryReducer,
  categoryUserReducer
})

export default rootReducer;