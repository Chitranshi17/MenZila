import React, { useContext, useEffect } from "react";
import ProductContext from "../Context/Products/ProductContext";
import { fetchMobileDevice } from "../Context/Products/ProductAction";
import { Card } from "@mui/material";
import Header from "../Components/Header";
import DeviceCard from "../Components/DeviceCard";

const MobileDevice = () => {

  const {Devices , dispatch , isLoading , isSuccess , isError} = useContext(ProductContext);

  const getMobileDevice = async () => {
    const data = await fetchMobileDevice();
    console.log("data Here Mobile Device : ", data);

    dispatch({

      type : "GET_DEVICES",
      payload : data,

    });
  };

  

  useEffect(() => {
    // fetchMobileDevice();
    getMobileDevice();
  },[]);


  
  if(isLoading || Devices===0){
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

  if(Devices === 0){
    return(
      <div className="container d-flex align-items-center justify-content-center text-success" style={{width : "100%" , height : "20rem"}}>
        <h3>No Todo Yet.</h3>
      </div>
    )
  }
  



  return (
    <>
      <Header />
      <div className="ItemDisplay d-flex flex-column ">
        <div className="headingItems display-1  " style={{}}>Mobile Devices</div>
        <div className="Item-Product bg-body-tertiary">
          {
          Devices.map(Device => <DeviceCard key={Device.id} Device={Device}/>
          )
          }



{/* <div className="card">
        <div className="top-card">
          <img src="" alt="" />
        </div>
        <div className="bottom-card">
          <div className="card-details">
            <h4 style={{textAlign : "center"}}>Data Show</h4>
            <h5><span className='text-danger fw-bold'>Price </span> : 560000</h5>
            <div className="star d-flex align-items-center justify-content-center text-warning">
            <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
            </div>
          </div>
        </div>
    </div> */}


        </div>
      </div>
    </>
  );
};

export default MobileDevice;
