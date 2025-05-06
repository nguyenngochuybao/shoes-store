import { REGISTER_USER_REQUEST,REGISTER_USER_SUCCESS,REGISTER_USER_FAIL  } from "../Constants/constants";

const initialState = {
    user: [],
    loading: false,
}

export const registerUserReducer = ( state = initialState, action ) =>
{
    switch ( action.type )
    {
        case REGISTER_USER_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
            };
        case REGISTER_USER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}