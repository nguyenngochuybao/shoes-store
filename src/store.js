import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./redux/Reducer/rootReducer";


const store = configureStore( {
    reducer: rootReducer,
}
)

export default store;