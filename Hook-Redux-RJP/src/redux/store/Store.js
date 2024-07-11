import {legacy_createStore as createStore , applyMiddleware} from "redux";
import MyReducer from "../reducers/MyReducer";
import logger from "redux-logger";

let myReduxStore = createStore(MyReducer, applyMiddleware(logger));

export default myReduxStore;