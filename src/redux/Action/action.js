import
    {
        REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_FAIL,
        LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL,
        LOGOUT_USER_REQUEST, LOGOUT_USER_SUCCESS, LOGOUT_USER_FAIL,
        GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_FAIL,
        ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_FAIL,
        REMOVE_PRODUCT
    } from '../Constants/constants';


// Action to register a user
export const registerUserRequest = (users) =>
{
    return {
        type: REGISTER_USER_REQUEST,
        payload: users,
    };
}

export const registerUserSuccess = ( users ) =>
{
    return {
        type: REGISTER_USER_SUCCESS,
        payload: users,
    };
}

export const registerUserFail = ( error ) =>
{
    return {
        type: REGISTER_USER_FAIL,
        payload: error,
    };
}




// Action to login a user
export const loginUserRequest = ( credentials ) =>
{
    return {
        type: LOGIN_USER_REQUEST,
        payload: credentials,
    };
}


export const loginUserSuccess = ( users ) =>
{
    return {
        type: LOGIN_USER_SUCCESS,
        payload: users,
    };
}


export const loginUserFail = ( error ) =>
{
    return {
        type: LOGIN_USER_FAIL,
        payload: error,
    };
}


// Action to logout a user
export const logoutUserRequest = () =>
{
    return {
        type: LOGOUT_USER_REQUEST,
    };
}

export const logoutUserSuccess = () =>
{
    return {
        type: LOGOUT_USER_SUCCESS,
    };
}


export const logoutUserFail = ( error ) =>
{
    return {
        type: LOGOUT_USER_FAIL,
        payload: error,
    };
}

// Action to get user data
export const getProductsRequest = () =>
{
    return {
        type: GET_PRODUCTS_REQUEST,
    };
}
export const getProductsSuccess = ( user ) =>
{
    return {
        type: GET_PRODUCTS_SUCCESS,
        payload: user,
    };
}

export const getProductsFail = ( error ) =>
{
    return {
        type: GET_PRODUCTS_FAIL,
        payload: error,
    };
}

// Action to add a product
export const addProductRequest = ( product ) =>
{
    return {
        type: ADD_PRODUCT_REQUEST,
        payload: product,
    };
}
export const addProductSuccess = ( product ) =>
{
    return {
        type: ADD_PRODUCT_SUCCESS,
        payload: product,
    };
}
export const addProductFail = ( error ) =>
{
    return {
        type: ADD_PRODUCT_FAIL,
        payload: error,
    };
}

// Action to remove a product
export const removeProduct = ( productId ) =>
{
    return {
        type: REMOVE_PRODUCT,
        payload: productId,
    };
}