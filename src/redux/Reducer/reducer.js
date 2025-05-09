import
{
    REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_FAIL,
    LOGIN_USER_REQUEST, LOGIN_USER_FAIL, LOGIN_USER_SUCCESS

} from "../Constants/constants";

const initialState = {
    user: [],
    loading: false,
}

export const registerUserReducer = ( state = initialState, action ) =>
{
    switch ( action.type )
    {

        // Register user
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

        // Login user
        case LOGIN_USER_REQUEST:
            return { ...state, loading: true };
        case LOGIN_USER_SUCCESS:
            return { ...state, loading: false, user: action.payload };
        case LOGIN_USER_FAIL:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}