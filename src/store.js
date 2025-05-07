import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./redux/Reducer/rootReducer";
import rootSaga from "./redux/Saga/rootSaga";
import createSagaMiddleware from "redux-saga";


const sagaMiddleware = createSagaMiddleware();

const store = configureStore( {
    reducer: rootReducer,
    middleware: ( getDefaultMiddleware ) =>
        getDefaultMiddleware( { thunk: false } ).concat( sagaMiddleware ),
}
)

sagaMiddleware.run(rootSaga);

export default store;