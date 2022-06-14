import {loadingReducer} from './loadingReducer'
import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import thunk from "redux-thunk";
import {themeReducer} from "../../h12/bll/themeReducer";

const reducers = combineReducers({
    loading: loadingReducer,
    themeReducer,

})


const store = createStore(reducers, applyMiddleware(thunk))
export default store

export type InferActionsTypes <T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never
export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev
