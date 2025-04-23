import { useEffect, useState } from 'react';
import { IoKeyOutline, IoSchoolOutline, IoPersonOutline, IoLogoWhatsapp } from 'react-icons/io5';
import { PiNotePencilDuotone } from 'react-icons/pi';
import { FiLink, FiUser } from 'react-icons/fi';
import { FaCamera, FaTransgender } from 'react-icons/fa';
import "./accountinformation.css";

const AccountInformation = () => {
  const [acctInfo, setAcctinfo] = useState(() => {
    const savedData = localStorage.getItem("accountInfo");
    return savedData ? JSON.parse(savedData) : {
      fullName: "",
      school: "",
      gender: "",
      jambRegNo: "",
      phoneNumber: "",
      whatsappLink: "",
      profileImage: ""
    };
  });

  useEffect(() => {
    localStorage.setItem("accountInfo", JSON.stringify(acctInfo));
  });

  return (
    <div className="account-container">
      <div className="account-header">
        <p className="account-dash">Dashboard / settings</p>
        <h2 className="account-title">Account Information</h2>
      </div>

      <div className="personal-info-section">
        <h3 className="personal-info-title">Verification Details</h3>

        <div className="profile-pic-section">
          <div className="profile-image-container">
            {acctInfo.profileImage ? (
              <img
                src={acctInfo.profileImage}
                className="profile-image"
                alt="Profile"
              />
            ) : (
              <div className="profile-image-placeholder">
                <FaCamera className="camera-icon" />
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              id="profilePicInput"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    setAcctinfo({ ...acctInfo, profileImage: reader.result });
                  };
                  reader.readAsDataURL(file);
                }
              }}
            />
            <button
              className="change-pic-button"
              onClick={() => document.getElementById("profilePicInput").click()}
            >
              <FaCamera className="camera-icon-small" />
            </button>
          </div>
        </div>

        <div className="input-group">
          <label className="input-label">
            <IoPersonOutline className="input-icon" />
            Full Name
          </label>
          <input
            type="text"
            className="input-field"
            value={acctInfo.fullName}
            onChange={(e) => setAcctinfo({ ...acctInfo, fullName: e.target.value })}
          />
        </div>

        <div className="input-group">
          <label className="input-label">
            <IoSchoolOutline className="input-icon" />
            School/Location
          </label>
          <input
            type="text"
            className="input-field"
            value={acctInfo.school}
            onChange={(e) => setAcctinfo({ ...acctInfo, school: e.target.value })}
          />
        </div>

        <div className="input-group">
          <label className="input-label">
            <FaTransgender className="input-icon" />
            Gender
          </label>
          <div className="gender-options">
            {['Male', 'Female'].map(gender => (
              <label key={gender} className="gender-label">
                <input
                  type="radio"
                  name="gender"
                  value={gender}
                  checked={acctInfo.gender === gender}
                  onChange={(e) => setAcctinfo({ ...acctInfo, gender: e.target.value })}
                />
                {gender}
              </label>
            ))}
          </div>
        </div>

        <div className="input-group">
          <label className="input-label">
            <IoLogoWhatsapp className="input-icon" />
            WhatsApp Link
          </label>
          <input
            type="url"
            className="input-field"
            value={acctInfo.whatsappLink}
            onChange={(e) => setAcctinfo({ ...acctInfo, whatsappLink: e.target.value })}
          />
        </div>

        <div className="input-group">
          <label className="input-label">
            <FiUser className="input-icon" />
            JAMB Registration Number
          </label>
          <input
            type="text"
            className="input-field"
            value={acctInfo.jambRegNo}
            onChange={(e) => setAcctinfo({ ...acctInfo, jambRegNo: e.target.value })}
          />
        </div>

        <div className="security-section">
          <div className="security-input-group">
            <IoKeyOutline className="security-icon" />
            <input
              type="password"
              className="security-field"
              placeholder="New Password"
            />
            <button className="security-button">
              Reset Password
            </button>
          </div>

          <div className="security-input-group">
            <PiNotePencilDuotone className="security-icon" />
            <input
              type="tel"
              className="security-field"
              placeholder="New Phone Number"
              value={acctInfo.phoneNumber}
              onChange={(e) => setAcctinfo({ ...acctInfo, phoneNumber: e.target.value })}
            />
            <button className="security-button">
              Update Number
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountInformation;