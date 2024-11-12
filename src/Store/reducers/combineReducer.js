import { combineReducers } from "redux";
import { reducer, MovieDetailReducer, Mname } from "./reducer";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const presistConfig = {
    key: 'root',
    storage
}


const reducers = combineReducers({
    like: persistReducer(presistConfig, reducer),
    detail: persistReducer(presistConfig, MovieDetailReducer),
    name: persistReducer(presistConfig,Mname)
})

export default reducers