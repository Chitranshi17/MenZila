const ProductReducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };

    case "GET_DEVICES":
        return{
            ...state,
            Devices : action.payload,
        }
    case "ADD_TO_CART":
      return{
        ...state,
        cartItems : [action.payload , ...state.cartItems],
      }
    case "ADD_TO_CART1":
      return{
        ...state,
        cartItems : [action.payload , ...state.cartItems],
      }

    case "REMOVE_FROM_CART":
      return{
        ...state,
        cartItems : state.cartItems.filter(item => item.id !== action.payload)
      }
    default:
      return state;
  }
};

export default ProductReducer;
