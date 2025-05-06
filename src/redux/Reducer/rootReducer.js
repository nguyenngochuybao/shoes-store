import { combineReducers } from "@reduxjs/toolkit";

import { registerUserReducer } from "./reducer"; 

export const rootReducer = combineReducers( {
    user:registerUserReducer
} )