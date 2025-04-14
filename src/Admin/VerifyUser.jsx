import React, { useState } from "react";
import "./verifyuser.css";
import StudentImage from "../../public/images/Lp2.jpg";
import { useNavigate } from "react-router-dom";

const VerifyUser = () => {
  const nav = useNavigate();

  const studentDetails = [
    {
      image: `${StudentImage}`,
      name: "Amara onah",
      school: "Yaba Tech",
      product: "shirt",
    },
    {
      image: `${StudentImage}`,
      name: "Amara onah",
      school: "Yaba Tech",
      product: "shirt",
    },
    {
      image: `${StudentImage}`,
      name: "Amara onah",
      school: "Yaba Tech",
      product: "shirt",
    },
    {
      image: `${StudentImage}`,
      name: "Amara onah",
      school: "Yaba Tech",
      product: "shirt",
    },
    {
      image: `${StudentImage}`,
      name: "Amara onah",
      school: "Yaba Tech",
      product: "shirt",
    },
    {
      image: `${StudentImage}`,
      name: "Amara onah",
      school: "Yaba Tech",
      product: "shirt",
    },
  ];
  return (
    <div className="body">
      <div className="main-body">
        <div className="header">
          <span>NAMES OF USERS</span>
          <span>STATE OF THEIR UPLOADED DATA</span>
        </div>
        <div className="user-verify-details-holder">  
        {studentDetails?.map((item, index) => (
          <div className="user-details-holder" key={index}>
            <div className="user-details">
              <span
                className="user-image"
                onClick={() => nav("/admindashboard/verifysuccessful")}
              >
                <img src={item.image} alt="" />
              </span>

              <span className="verify-user-name">
                <span className="verify-name"> {item.name} </span>
                <span className="uploaded-product">{item.product}</span>
                <span className="school">{item.school}</span>
              </span>
            </div>
            <div className="product-state">
              <div className="checkbox-holder">
                <span className="verified">
                  <input type="checkbox" />
                  <p>verified</p>
                </span>
                <span className="pending">
                  <input type="checkbox" />
                  <p>pending</p>
                </span>
                <span className="rejected">
                  <input type="checkbox" />
                  <p>rejected</p>
                </span>
              </div>
            </div>
          </div>
        ))}
         </div>
      </div>
    </div>
  );
};

export default VerifyUser;
