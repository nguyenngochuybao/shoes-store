import
{
    GET_PRODUCTS_FAIL, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS,
    ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_FAIL
} from '../Constants/constants';



const initialState = {
    Products: [], 
};

export const productReducer = ( state = initialState, action ) =>
{
    switch ( action.type )
    {
        case GET_PRODUCTS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };

        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                loading: false,
                Products: action.payload,
            };

        case GET_PRODUCTS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        
        case ADD_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                cartItems: [...state.cartItems, action.payload],
            };
        case ADD_PRODUCT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};