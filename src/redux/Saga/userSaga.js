import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { registerUserApi, loginUserAPI } from "./apiSaga";
import { registerUserSuccess, loginUserSuccess, loginUserFail } from "../Action/action";
import { REGISTER_USER_REQUEST, LOGIN_USER_REQUEST } from "../Constants/constants";
import { useNavigate } from "react-router-dom";

import axios from "axios";

function* fetchUser ( action )
{
    try
    {
        const response = yield call( registerUserApi, action.payload );
        yield put( registerUserSuccess( response.data ) );
        alert( "Đăng ký thành công" );
    }
    catch ( error )
    {
        alert( "Đăng ký không thành công" );
    }
}


function* loginUser ( action )
{
    try
    {
        const response = yield call( loginUserAPI, action.payload );
        const user = response.data[0];
        if (user) {
          localStorage.setItem("user", JSON.stringify(user));
            yield put( loginUserSuccess( user ) );
            alert( "Đăng nhập thành công" );

        } else {
            alert( "Tài khoản hoặc mật khẩu không đúng" );
        }
    }
    catch ( error )
    {
        alert( "Đăng nhập không thành công" );
        yield put( loginUserFail( error.message ) );
    }
}


function* userSaga ()
{
    yield takeEvery( REGISTER_USER_REQUEST, fetchUser );
    yield takeLatest( LOGIN_USER_REQUEST, loginUser );

}

export default userSaga;