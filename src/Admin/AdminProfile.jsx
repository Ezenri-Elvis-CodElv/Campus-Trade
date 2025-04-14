import React from "react";
import "./adminprofile.css";
import { FaRegUser } from "react-icons/fa";
import { IoCreateOutline } from "react-icons/io5";

const AdminProfile = () => {
  return (
    <div className="admin-dashboard">
      <h2 className="admin-dashboard-h2">Welcome! victoria</h2>
      <p className="subtitle">We're so happy to have you here</p>

      <div className="stats-container">
        <div className="stat-card blue">
          <h3  className="stat-card-h3">
            {" "}
            <IoCreateOutline style={{color:"rgb(171, 107, 255)"}} />
            50
          </h3>
          <p className="cards-p-tag">Users</p> 
        </div>
        <div className="stat-card red">
          <h3  className="stat-card-h3">
            {" "}
            <FaRegUser style={{color: "orange"}} />
            15
          </h3>
          <p className="cards-p-tag">Ads subscribers</p>
        </div>
        <div className="stat-card blue">
          <h3  className="stat-card-h3">
            {" "}
            <IoCreateOutline  style={{color:"rgb(171, 107, 255)"}} />
            400
          </h3>
          <p className="cards-p-tag">Listed post</p>
        </div>
      </div>

      <div className="progress-section">
        <h4 className="progress-section-h4">Percentage of listed items of all users weekly</h4>

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
        
      </div>
    </div>
  );
};

export default AdminProfile;
