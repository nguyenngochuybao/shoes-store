import
  {
    ADD_PRODUCT_REQUEST,
    ADD_PRODUCT_SUCCESS,
    ADD_PRODUCT_FAIL,
    REMOVE_PRODUCT,
  } from "../Constants/constants";

const initialState = {
  cartItems: JSON.parse( localStorage.getItem( "cartItems" ) ) || [],
  loading: false,
  error: null,
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

    case ADD_PRODUCT_SUCCESS: {
      const { id, quantity } = action.payload;
      const existingIndex = state.cartItems.findIndex( item => item.id === id );
      let updatedItems = [ ...state.cartItems ];

      if ( existingIndex !== -1 )
      {
        updatedItems[ existingIndex ] = {
          ...updatedItems[ existingIndex ],
          quantity: updatedItems[ existingIndex ].quantity + quantity,
        };
      } else
      {
        updatedItems.unshift( { ...action.payload } );
      }

      return {
        ...state,
        cartItems: updatedItems,
        loading: false,
      };
    }

    case ADD_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case REMOVE_PRODUCT:
      const filteredCart = state.cartItems.filter( ( _, i ) => i !== action.payload );
      localStorage.setItem( "cartItems", JSON.stringify( filteredCart ) );
      return {
        ...state,
        cartItems: filteredCart,
      };

    default:
      return state;
  }
};
