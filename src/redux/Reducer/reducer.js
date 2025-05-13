import
{
    REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_FAIL,
    LOGIN_USER_REQUEST, LOGIN_USER_FAIL, LOGIN_USER_SUCCESS

} from "../Constants/constants";

const initialState = {
    registerData: {
        load: false,
        error: ""
    },
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
            return { ...state, error: null };
        case LOGIN_USER_SUCCESS:
            return { ...state, user: action.payload, error: null };
        case LOGIN_USER_FAIL:
            return { ...state, error: action.payload };

        default:
            return state;
    }
}