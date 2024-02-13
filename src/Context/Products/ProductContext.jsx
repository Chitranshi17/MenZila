import { createContext, useReducer } from "react";
import ProductReducer from "./ProductReducer";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const initialState = {
    products: [],
    Devices: [],
    cartItems: [],
      // {
      //   id: 2,
      //   title: "Mens Casual Premium Slim Fit T-Shirts ",
      //   price: 22.3,
      //   description:
      //     "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      //   category: "men's clothing",
      //   image:
      //     "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      //   rating: {
      //     rate: 4.1,
      //     count: 259,
      //   },
      // },
    isLoading: false,
    isError: false,
    isSuccess: false,
  };



  const [state, dispatch] = useReducer(ProductReducer, initialState);




  return (
    <ProductContext.Provider value={{ ...state, dispatch}}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
