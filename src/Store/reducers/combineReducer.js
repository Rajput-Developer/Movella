import { combineReducers } from "redux";
import { reducer, MovieDetailReducer } from "./reducer";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const presistConfig = {
    key:'root',
    storage
}


const reducers = combineReducers({
    like: persistReducer(presistConfig,reducer),
    detail: persistReducer(presistConfig,MovieDetailReducer)
})

export default reducers