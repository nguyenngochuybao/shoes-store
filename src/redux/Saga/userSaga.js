import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { registerUserApi } from "./apiSaga";
import { registerUserSuccess,loginUserSuccess, loginUserFail } from "../Action/action";
import { REGISTER_USER_REQUEST, LOGIN_USER_REQUEST } from "../Constants/constants";
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
        const response = yield call( axios.get, "http://localhost:3000/users", {
            params: {
                name: action.payload.name,
                password: action.payload.password,
            }    
            
        } );
        console.log( "response", response.data );
        if ( response.data.length > 0 )
        {
            yield put( loginUserSuccess( response.data[ 0 ] ) );
            alert( "Đăng nhập thành công" );
             
        }
        else
        {
           alert( "Tài khoản hoặc mật khẩu không đúng" );
        }
    }
    catch ( error )
    {
       console.log( "saga bị lỗi", error );
        yield put( loginUserFail( error ) );
    }
}

function* userSaga ()
{
    yield takeEvery( REGISTER_USER_REQUEST, fetchUser );
    yield takeEvery( LOGIN_USER_REQUEST, loginUser );

}

export default userSaga;