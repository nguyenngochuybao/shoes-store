import
{
    GET_PRODUCTS_FAIL,GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS,
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
        default:
            return state;
    }
};