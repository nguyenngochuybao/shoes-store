import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import { registerUserApi, loginUserAPI } from "./apiSaga";
import { registerUserSuccess, loginUserSuccess, loginUserFail, logoutUserSuccess, getProductsSuccess, addProductSuccess } from "../Action/action";
import { REGISTER_USER_REQUEST, LOGIN_USER_REQUEST, LOGOUT_USER_REQUEST, GET_PRODUCTS_REQUEST, ADD_PRODUCT_REQUEST } from "../Constants/constants";
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

function* logoutUser ( action )
{
    try
    {
        localStorage.removeItem( "user" );
        yield put( logoutUserSuccess( null ) );
        alert( "Đăng xuất thành công" );
    }
    catch ( error )
    {
        alert( "Đăng xuất không thành công" );
    }
}

function* fetchProducts (action)
{
    try
    {
        const response = yield call( axios.get, "http://localhost:3000/products" );
        yield put( getProductsSuccess( response.data ) );
        console.log( "data", response.data );
    }
    catch ( error )
    {
       console.log( error );
    }
}

function* handleAddToCart(action) {
    try {
      const product = action.payload;
  console.log("product11111", product);
      const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
      cartItems.push(product);
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
  
      yield put( addProductSuccess(product));
    } catch (error) {
        console.error("Error adding product to cart:", error);
        
    }
  }

function* userSaga ()
{
    yield takeEvery( REGISTER_USER_REQUEST, fetchUser );
    yield takeLatest( LOGIN_USER_REQUEST, loginUser );
    yield takeLatest( LOGOUT_USER_REQUEST, logoutUser );
    yield takeEvery( GET_PRODUCTS_REQUEST, fetchProducts );
    yield takeEvery(ADD_PRODUCT_REQUEST,handleAddToCart)



}

export default userSaga;
