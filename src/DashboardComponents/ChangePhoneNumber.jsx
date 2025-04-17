import "./CreatePost"
import { RiCloseFill } from "react-icons/ri";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./changephonenumber.css"

const  ChangePhoneNumber = () => {
  const navigate = useNavigate();
  return (
    <div className="changephonenumber">
      <div className="changephonenumberwrapper">
        <div className="backicon">
          <button className="backiconbtn" onClick={() => navigate(-1)}>
            <RiCloseFill size={40}/>
          </button>
        </div>
        <div className="changephonenumberinner">
          <div className="changephonenumberlast">
            <h4 className="number1">Change Your Number</h4>
            <h3 className="number">
              click on the book and input your new phone <br /> number
            </h3>
            <input className="kkkkk" type="number" placeholder="090876543" />
            <button className="saveee">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default  ChangePhoneNumber



