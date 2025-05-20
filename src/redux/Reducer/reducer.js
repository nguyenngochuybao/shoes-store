import
{
    REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_FAIL,
    LOGIN_USER_REQUEST, LOGIN_USER_FAIL, LOGIN_USER_SUCCESS,
    LOGOUT_USER_REQUEST, LOGOUT_USER_SUCCESS, LOGOUT_USER_FAIL

} from "../Constants/constants";

const initialState = {
    registerData: {
        load: false,
        error: ""
    },
    Products: [],
    user: null,
    error: null,
}

export const registerUserReducer = ( state = initialState, action ) =>
{
    switch ( action.type )
    {

        // Register user
        case REGISTER_USER_REQUEST:
            return {
                ...state,
                registerData: {
                    ...state.registerData,
                    loading: true,
                    error: "",
                }
            };
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                registerData: {
                    ...state.registerData,
                    load: true,
                    error: "",
                }
            };
        case REGISTER_USER_FAIL:
            return {
                ...state,
                registerData: {
                    ...state.registerData,
                    loading: false,
                    error: action.payload,
                },
            };
        // Login user
        case LOGIN_USER_REQUEST:
            return {
                ...state,
                error: null
            };
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                user: action.payload,
                error: null
            };
        case LOGIN_USER_FAIL:
            return {
                ...state,
                error: action.payload
            };

        // Logout user
        case LOGOUT_USER_REQUEST:
            return {
                ...state,
                error: null
            };
        case LOGOUT_USER_SUCCESS:
            return {
                ...state,
                user: null,
                error: null
            };
        default:
            return state;
    }
    
}
