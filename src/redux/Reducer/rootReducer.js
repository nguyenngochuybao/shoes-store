import { combineReducers } from "@reduxjs/toolkit";

import { registerUserReducer } from "./reducer"; 
import { productReducer } from "./productsReducer";
import { cartReducer } from "./cartProducts";

export const rootReducer = combineReducers( {
    user: registerUserReducer,
    product: productReducer,
    cart:cartReducer
} )