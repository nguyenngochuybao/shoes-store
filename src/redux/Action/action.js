import { REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_FAIL } from '../Constants/constants';

export const registerUserRequest = () =>
{
    return {
        type: REGISTER_USER_REQUEST,
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

// Action to register a user