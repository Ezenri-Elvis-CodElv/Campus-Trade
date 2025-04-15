import React from 'react';
import { IoKeyOutline } from 'react-icons/io5';
import { PiNotePencilDuotone } from 'react-icons/pi';
import "./accountinformation.css"
import { NavLink } from 'react-router-dom';

const AccountInformation = () => {
  return (
    <div className="account-container">
      <div className="account-header">
        <p className="account-breadcrumb">Dashboard/ settings</p>
        <h2 className="account-title">Account settings</h2>
      </div>

      <div className="personal-info-section">
        <h3 className="personal-info-title">Personal information</h3>

        <div className="profile-pic-section">
          <img
            src="https://i.ibb.co/fSr5z1m/profile-pic.png" 
            className="profile-image"
            alt="Profile"
          />
          <div className="change-pic-text">
            change <br /> profile <br /> pic
          </div>
        </div>

        <div className="input-group">
          <label className="input-label">Full name</label>
          <input type="text" className="input-field" placeholder="Input your full name" />
        </div>

        <div className="input-group">
          <label className="input-label">Full Address</label>
          <input type="text" className="input-field" placeholder="Enter your address" />
        </div>

        <div className="input-group">
          <label className="input-label">Phone number</label>
          <input type="tel" className="input-field" placeholder="Enter phone number" />
        </div>

        <div className="input-group">
          <label className="input-label">Bio</label>
          <textarea
            className="bio-field"
            placeholder="Write your bio..."
          ></textarea>
        </div>

        <div className="account-buttons">
          <NavLink to="/dashboard/changephonenumber" className="reset-password-button">
            <span className="reset-icon"><IoKeyOutline /></span>
            Reset password
          </NavLink>
          <NavLink to="/dashboard/changepassword" className="change-phone-button">
            <span className="change-icon"><PiNotePencilDuotone /></span>
            Change phone number
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default AccountInformation;