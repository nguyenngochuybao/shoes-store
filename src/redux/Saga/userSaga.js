import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { registerUserApi } from "./apiSaga";
import {  registerUserSuccess } from "../Action/action";
import { REGISTER_USER_REQUEST } from "../Constants/constants";

function* fetchUser (action)
{ 
    try
    { 
        const response = yield call( registerUserApi, action.payload );
        yield put(registerUserSuccess(response.data));
    }
    catch (error)
    { 
        console.log("saga bị lỗi", error);
    }
}

function* userSaga ()
{ 
    yield takeEvery( REGISTER_USER_REQUEST, fetchUser );
}

export default userSaga;