const ProductReducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };

    case "GET_DEVICES":
      return {
        ...state,
        Devices: action.payload,
      };
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [action.payload, ...state.cartItems],
      };
    case "ADD_TO_CART1":
      return {
        ...state,
        cartItems: [action.payload, ...state.cartItems],
      };

    case "INCREASE_PRODUCT":
      const checkIndex = state.cartItems.findIndex((currentItem) => {
        return currentItem.id === action.payload.id;
      });
   
      return {
        ...state,
        cartItems: state.cartItems.map((currentItem, index) =>
          index === checkIndex
            ? { ...currentItem, itemQuantity: currentItem.itemQuantity + 1 }
            : currentItem
        ),
      };
      // return {
      //   ...state,
      //   cartItems: state.cartItems.map((item) => {
      //       if (item.id === action.payload.id) {
      //           if (action.payload.num + item.qty >= 1) {
      //               return {
      //                   ...item, qty: item.qty + action.payload.num
      //               }
      //           }
      //           else {
      //               return item
      //           }
      //       }
      //       else {
      //           return item
      //       }
      //   })}

    case "DECREASE_PRODUCT":
      // const checkItemIndex = state.cartItems.findIndex((currentItem) => {
      //   return currentItem.id === action.payload.id;
      // });

      // return {
      //   ...state,
      //   cartItems: state.cartItems.map((currentItem, index) =>
      //     index === checkItemIndex
      //       ? {
      //           ...currentItem,
      //           itemQuantity:
      //             currentItem.itemQuantity > 1
      //               ? currentItem.itemQuantity - 1
      //               : 1,
      //         }
      //       : currentItem
      //   ),
      // };

      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
            if (item.id === action.payload.id) {
                return {
                    ...item, newPrice: item.price * item.qty
                }
            }
            else {
                return item
            }
        })
    }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};

export default ProductReducer;
