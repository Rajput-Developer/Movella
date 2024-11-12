import { thunk } from "redux-thunk";
import reducers from './reducers/combineReducer'
import { applyMiddleware, legacy_createStore } from "redux";
import { persistStore } from "redux-persist";

export const sentralStore = legacy_createStore(reducers, {}, applyMiddleware(thunk))

export const presistor = persistStore(sentralStore)