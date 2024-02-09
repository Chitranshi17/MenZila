import React from "react";
import { useContext, useEffect } from "react";
import Card from "../Components/Card";
import ProductContext from "../Context/Products/ProductContext";
import { fetchProductCategory } from "../Context/Products/ProductAction";
import Header from "../Components/Header";
import { useParams } from "react-router-dom";

const CategoryProducts = () => {
  const { products, dispatch, isLoading, isSuccess, isError } =
    useContext(ProductContext);

    const params = useParams();
    // console.log(params);

  const getProductData = async (category) => {
    const data = await fetchProductCategory(category);
    console.log(data);

    dispatch({
      type: "GET_PRODUCTS",
      payload: data,
    });
  };

  if (isLoading) {
    return (
   
        <div
        className=" d-flex align-items-center justify-content-center text-primary"
        style={{ width: "100%", height: "20rem" }}
      >
        <h3>Loading....</h3>
      </div>
  
    );
  }

  if (isError) {
    return (
      <div
        className="container d-flex align-items-center justify-content-center text-danger"
        style={{ width: "100%", height: "20rem" }}
      >
        <h3>Something Went Wrong !!</h3>
      </div>
    );
  }

  if (products === 0) {
    return (
      <div
        className="container d-flex align-items-center justify-content-center text-success"
        style={{ width: "100%", height: "20rem" }}
      >
        <h3>No Todo Yet.</h3>
      </div>
    );
  }

  useEffect(() => {
    getProductData(params.category);
  }, [params]);

  return (
    <>
      <Header />
      <div className="ItemDisplay d-flex flex-column ">
        <div className="headingItems display-3 " style={{}}>{params.category}</div>
        {/* <div className="itemContainer"> */}
        <div className="Item-Product">
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default CategoryProducts;
