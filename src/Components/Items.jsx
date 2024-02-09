import React, { useContext, useEffect } from 'react'
import Card from './Card';
import ProductContext from '../Context/Products/ProductContext';
import { fetchProducts } from '../Context/Products/ProductAction';

const Items = () => {


  

  const {products, dispatch, isLoading, isSuccess, isError} = useContext(ProductContext);

  const getProductData = async() => {
    const data = await fetchProducts();
    // console.log(data)

    dispatch({
      type : "GET_PRODUCTS",
      payload : data,
    })
  }


  // console.log(getProductData)
  
  if(isLoading || products===0){
    return(
      <div className="container d-flex align-items-center justify-content-center text-primary" style={{width : "100%" , height : "20rem"}}>
        <h3>Loading....</h3>
      </div>
    )
  }

  if(isError){
    return(
      <div className="container d-flex align-items-center justify-content-center text-danger" style={{width : "100%" , height : "20rem"}}>
        <h3>Something Went Wrong !!</h3>
      </div>
    )
  }

  if(products === 0){
    return(
      <div className="container d-flex align-items-center justify-content-center text-success" style={{width : "100%" , height : "20rem"}}>
        <h3>No Todo Yet.</h3>
      </div>
    )
  }
  

  useEffect(()=>{
    getProductData();
  },[])

  return (
    <div className="ItemDisplay">
    <div className="Item">
    <div className="headingItems display-1 w-100" style={{}}>
      <h3>Trending Collections</h3>
    </div>
       {
        products.map(product => <Card key={product.id} product={product}/>
        )
}
    </div>
  </div>
  )
}

export default Items;
