import React, { useEffect, useState } from 'react';
import './profilepagesecond.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { BsWhatsapp, BsFillGeoAltFill } from 'react-icons/bs';
import { IoCopy } from 'react-icons/io5';

const ProfilePage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [copied, setCopied] = useState(false);
  const BASE_URL = "https://campustrade-kku1.onrender.com";

  const getUserProfile = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/v1/kyc/get-kyc-details/${id}`);
      setUser(res?.data?.data?.SellerKYCs);
      console.log("this is res",res)
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    getUserProfile();
  }, [id]);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };


  return (
    <div className="profile-container">
      {/* Cover Photo Section */}
      <div className="profile-cover">
        <div className="profile-image-container">
          <img
            src={user?.profilePic}
            alt="Profile"
            className="profile-image"
          />
        </div>
      </div>

      {/* Profile Info Section */}
      <div className="profile-info">
        <h2 className="profile-fullname">{user?.fullName}</h2>
        
        {/* Stats Row */}
        <div className="profile-stats">
          <div className="stat-item">
            <div className="stat-number"></div>
            <div className="stat-label"></div>
          </div>
          <div className="stat-item">
            <div className="stat-number"></div>
            <div className="stat-label"></div>
          </div>
          <div className="stat-item">
            <div className="stat-number"></div>
            <div className="stat-label"></div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="profile-actions">
          <button 
            className="profile-copy-phone"
            onClick={() => handleCopy(user?.phoneNumber)}
          >
            <IoCopy /> {copied ? 'Copied!' : 'Copy Number'}
          </button>
          <a
            className="profile-whatsapp-link"
            href={`https://wa.me/${user?.phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsWhatsapp /> Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* Details Sections */}
      <div className="profile-details">
        {/* About Section */}
        <div className="profile-section">
          <h3 className="section-title">About</h3>
          <p className="profile-bio">
            {user?.bio || 'No bio available'}
          </p>
        </div>

        {/* Contact Section */}
        <div className="profile-section">
          <h3 className="section-title">Contact Information</h3>
          <div className="detail-item">
            <BsFillGeoAltFill className="detail-icon" />
            <span>{user?.school}</span>
          </div>
          <div className="detail-item">
            <BsWhatsapp className="detail-icon" />
            <span>{user?.phoneNumber}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;