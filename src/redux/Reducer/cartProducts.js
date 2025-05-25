import
{
    ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_FAIL
} from '../Constants/constants';



const initialState = {
    cartItems: [],
};

export const cartReducer = ( state = initialState, action ) =>
{
    switch ( action.type )
    {
    
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