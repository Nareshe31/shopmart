import { ADD_TO_CART,ADD_QUANTITY_OF_PRODUCT, REMOVE_FROM_CART, UPDATE_STATE, REMOVE_QUANTITY_OF_PRODUCT } from "../types";

const initialState={
    cart:[],
    auth:null,
    storeLoaded:false
}

const reducer=(state=initialState, action) => {
    switch (action.type) {
      case UPDATE_STATE:
        return {...action.payload,storeLoaded:true}
      case ADD_TO_CART:
        return {...state,cart:[...state.cart,action.payload]}
      case ADD_QUANTITY_OF_PRODUCT:
        return {...state,cart:state.cart.map((pr)=>pr._id===action.payload?{...pr,quantity:pr.quantity+1}:pr)}
      case REMOVE_QUANTITY_OF_PRODUCT:
        return {...state,cart:state.cart.map((pr)=>pr._id===action.payload?{...pr,quantity:pr.quantity-1}:pr)}
      case REMOVE_FROM_CART:
        return {...state,cart:state.cart.filter(pr=>pr._id!==action.payload)}
      default:
        return state;
    }
  };

  export default reducer;