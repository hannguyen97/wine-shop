import { ORDER_CREATE_FAIL, ORDER_CREATE_RESET, ORDER_CREATE_SUCCESS, ORDER_DETAILS_REQUEST } from "../constants/orderConstants";

export const orderCreateReducer = (state = {} , action) => {
    switch (action.type) {
     case ORDER_DETAILS_REQUEST:
        return {loading :true};
     case ORDER_CREATE_SUCCESS :
       return {loading :false ,success :true ,order :action.payload}
     case ORDER_CREATE_FAIL :
       return {loading :false , error :action.payload}
     case ORDER_CREATE_RESET :
       return {}; 
       default:
        return state;
    }
}