import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { IoCreateOutline } from "react-icons/io5";
import { useNavigate } from "react-router";
const SellerProfile = () => {
  const nav = useNavigate();
  const userId = JSON.parse(localStorage.getItem("userData"))?.data?.id;
  const fullName = JSON.parse(localStorage.getItem("user"))?.fullName;
    const [recentPost, setRecentPost] = useState([]);
    const [pendingPost, setpendingPost] = useState([]);

  const UserProfile = async () => {
    try {
      const response = await axios.get(
        `https://campustrade-kku1.onrender.com/api/v1/kyc/get-kyc-details/${userId}`
      );
      console.log(response.data);
      localStorage.setItem(
        "user",
        JSON.stringify(response?.data?.data?.SellerKYCs)
      );
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };


  const getRecentProduct = async () => {
    try {
      const response = await axios.get(
        `https://campustrade-kku1.onrender.com/api/v1/recent-products/${userId}`
      );
      setRecentPost("This is the data",response?.data?.data);
    } catch (error) {
      // console.error("Error fetching categories:", error);
      // console.error("Error fetching categories:", error.response.data.message === "No recent posts" ? "0": error);
      error.response.data.message === "No recent posts" ? setRecentPost([]) : console.log(error) 

    }
  };

  const getPendingPost = async () => {
    try {
      const response = await axios.get(
        `https://campustrade-kku1.onrender.com/api/v1/all-pending-product/${userId}`
      );
      setpendingPost(response?.data?.data);
      console.log(response?.data?.data)
    } catch (error) {
      console.error("Error fetching categories:", error);
      error.response.data.message === "No recent posts" ? setpendingPost([]) : console.log(error) 
    }
  };

  useEffect(() => {
    getRecentProduct();
    getPendingPost()
  }, []);

  useEffect(() => { 
    getRecentProduct();
  }, []);


  useEffect(() => {
    UserProfile();
  }, []);

  return (
    <div className="admin-dashboard">
      <h2 className="admin-dashboard-h2">Welcome! {fullName}</h2>
      <p className="subtitle">We're so happy to have you here</p>

      <div className="stats-container">
        <div
          className="stat-card blue"
          onClick={() => nav("/dashboard/recentpost")}
        >
          <h3 className="stat-card-h3">
            {" "}
            <IoCreateOutline style={{ color: "rgb(171, 107, 255)" }} /> { recentPost.length }
          </h3>
          <p className="cards-p-tag">Recent Post</p>
        </div>
        <div className="stat-card red">
          <h3 className="stat-card-h3">
            {" "}
            <FaRegUser style={{ color: "orange" }} /> {pendingPost.length}
          </h3>
          <p className="cards-p-tag">Pending Post</p>
        </div>
        <div className="stat-card blue">
          <h3 className="stat-card-h3">
            {" "}
            <IoCreateOutline style={{ color: "rgb(171, 107, 255)" }}
            onClick={() => nav("/dashboard/pendingpost")} />
              {recentPost.length + pendingPost.length}
          </h3>
          <p className="cards-p-tag">Listed post</p>
        </div>
      </div>
      <div className="seller_dash">
        <img src="/images/sellerprofile.jpg" alt=""  className=""/>
      </div>

      {/* <div className="progress-section">
        <h4 className="progress-section-h4">
          Percentage of listed items of all users weekly
        </h4>

        <div className="progress-card">
          <div className="progress-circle red">80%</div>
          <div className="progress-info">
            <p className="progress-info-p">
              <strong>percentage of uploaded post weekly</strong>
            </p>
            <small className="progress-info-small">Gadgets</small>
          </div>
        </div>

        <div className="progress-card">
          <div className="progress-circle blue">60%</div>
          <div className="progress-info">
            <p className="progress-info-p">
              <strong>percentage of uploaded post weekly</strong>
            </p>
            <small className="progress-info-small">Books</small>
          </div>
        </div>

        <div className="progress-card">
          <div className="progress-circle yellow">20%</div>
          <div className="progress-info">
            <p className="progress-info-p">
              <strong>percentage of uploaded post weekly</strong>
            </p>
            <small className="progress-info-small">Appliances</small>
          </div>
        </div>
        <div className="progress-card">
          <div className="progress-circle orange">50%</div>
          <div className="progress-info">
            <p className="progress-info-p">
              <strong>percentage of uploaded post weekly</strong>
            </p>
            <small className="progress-info-small">Shoes</small>
          </div>
        </div>
        <div className="progress-card">
          <div className="progress-circle purple">60%</div>
          <div className="progress-info">
            <p className="progress-info-p">
              <strong>percentage of uploaded post weekly</strong>
            </p>
            <small className="progress-info-small">Cloths</small>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default SellerProfile;
