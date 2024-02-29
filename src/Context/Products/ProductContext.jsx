import { createContext, useReducer } from "react";
import ProductReducer from "./ProductReducer";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const initialState = {
    products: [],
    Devices: [],
    cartItems: [],
    total : 0,
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
export const useCart = () => useContext(ProductContext);
