import { useEffect, useState } from 'react';
import { IoKeyOutline, IoSchoolOutline, IoPersonOutline, IoLogoWhatsapp } from 'react-icons/io5';
import { PiNotePencilDuotone } from 'react-icons/pi';
import { FiLink, FiUser } from 'react-icons/fi';
import { FaCamera, FaTransgender } from 'react-icons/fa';
import "./accountinformation.css";
import axios from 'axios';

const AccountInformation = () => {
  const [previewImage, setPreviewImage] = useState(null);
  const [acctInfo, setAcctinfo] = useState(() => {
    const savedData = localStorage.getItem("accountInfo");
    return savedData ? JSON.parse(savedData) : {
      fullName: "",
      school: "",
      gender: "",
      jambRegNo: "",
      phoneNumber: "",
      whatsappLink: "",
      profilePic: null
    };
  });
  const [loadState, setLoadState] = useState(false)
  const userId = JSON.parse(localStorage.getItem("userData"))?.data?.id;
  const token = JSON.parse(localStorage.getItem("token"));

  useEffect(() => {
    localStorage.setItem("accountInfo", JSON.stringify(acctInfo));
  }, [acctInfo]);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
      setAcctinfo(prev => ({ ...prev, profilePic: file }));
    }
  };



  const BASE_URL = "https://campustrade-kku1.onrender.com"

  const handleProfileSettings = async () => {
    const formData = new FormData();

    if (acctInfo.fullName) formData.append("fullName", acctInfo.fullName);
    if (acctInfo.school) formData.append("school", acctInfo.school);
    if (acctInfo.gender) formData.append("gender", acctInfo.gender);
    if (acctInfo.jambRegNo) formData.append("jambRegNo", acctInfo.jambRegNo);
    if (acctInfo.phoneNumber) formData.append("phoneNumber", acctInfo.phoneNumber);
    if (acctInfo.whatsappLink) formData.append("whatsappLink", acctInfo.whatsappLink);
    if (acctInfo.profilePic) {
      formData.append("profilePic", acctInfo.profilePic);
    }
    console.log("profileImage is:", acctInfo.profileImage instanceof File); // should be true


    console.log("FormData about to be sent:");
    for (let pair of formData.entries()) {
      console.log(pair[0] + ':', pair[1]);
    }

    setLoadState(true);
    try {
      const ress = await axios.patch(`${BASE_URL}/api/v1/kyc/profile/${userId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization:` Bearer ${token}`,
        },
      });
      setLoadState(false);
      console.log("Update Success:", ress.data);
    } catch (err) {
      console.error("Update Failed:", err.response?.data || err.message);
      setLoadState(false);
    }
  };


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
            {acctInfo.profilePic ? (
              <img
                src={previewImage}
                className="profile-image"
                alt="Profile"
              />
            ) : (
              <div className="profile-image-placeholder"
                onClick={() => document.getElementById("profilePicInput").click()}
              >
                <FaCamera className="camera-icon" />
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              id="profilePicInput"
              onChange={handleImageChange}
            />

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
        <div className="settingsSubmitBtnWrapper">
          <button className='settingsSubmitBtn' onClick={handleProfileSettings}>
            {loadState ? "Updating..." : "Update"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountInformation;