import { combineReducers } from "redux";
import { reducer, MovieDetailReducer, bookmarkReducer } from "./reducer";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const likepresistConfig = {
    key: 'like',
    storage
}
const savepresistConfig = {
    key: 'save',
    storage
}
const MdetailpresistConfig = {
    key: 'detail',
    storage
}


const reducers = combineReducers({
    like: persistReducer(likepresistConfig, reducer),
    save: persistReducer(savepresistConfig, bookmarkReducer),
    detail: persistReducer(MdetailpresistConfig, MovieDetailReducer),
})

export default reducers