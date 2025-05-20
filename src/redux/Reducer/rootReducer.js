import { combineReducers } from "@reduxjs/toolkit";

import { registerUserReducer } from "./reducer"; 
import { productReducer } from "./productsReducer";

export const rootReducer = combineReducers( {
    user: registerUserReducer,
    product: productReducer
} )