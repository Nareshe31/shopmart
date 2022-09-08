import {ADD_QUANTITY_OF_PRODUCT, ADD_TO_CART, REMOVE_FROM_CART, REMOVE_QUANTITY_OF_PRODUCT, UPDATE_STATE} from '../types'

export const updateState=(payload)=>({type:UPDATE_STATE,payload})
export const addToCart=(payload)=>({type:ADD_TO_CART,payload})
export const addQuantityOfProduct=(payload)=>({type:ADD_QUANTITY_OF_PRODUCT,payload})
export const removeQuantityOfProduct=(payload)=>({type:REMOVE_QUANTITY_OF_PRODUCT,payload})
export const removeFromCart=(payload)=>({type:REMOVE_FROM_CART,payload})