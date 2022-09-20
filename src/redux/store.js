import { createStore, applyMiddleware } from "redux";
import { createBrowserHistory } from "history"
import thunk from "redux-thunk"
import rootReducer from "./reducers/rootReducer";

export const history = createBrowserHistory()

const middlewares = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store;