import { createStore } from "redux"
import reducer from './reducers'

const initialState={
    cart:[],
    auth:null,
    storeLoaded:false
}

const store=createStore(reducer,initialState)

export default store
