import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import combined from "./reducers";

const middlaware = applyMiddleware(thunk, createLogger());

export default createStore(combined, middlaware);
