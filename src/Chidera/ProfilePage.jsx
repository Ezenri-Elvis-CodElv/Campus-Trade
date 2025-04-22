import React, { useEffect, useState } from 'react';
import './profilepagesecond.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProfilePage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(true);

  const BASE_URL = "https://campustrade-kku1.onrender.com";

  const getUserProfile = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/v1/kyc/get-kyc-details/${id}`);
      const userData = res.data.data?.SellerKYCs;
      setUser(userData);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setLoading(false);
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

  if (loading) return <div className="profile-loading-text">Loading profile...</div>;
  if (!user) return <div className="profile-loading-text">User not found</div>;

  return (
    <div className="profile-container">
      <div className="profile-card">
        <img
          src={user.profilePic}
          alt="Profile"
          className="profile-image"
        />

        <h2 className="profile-fullname">{user.fullName}</h2>

        <p
          className="profile-phone copyable-phone"
          onClick={() => handleCopy(user.phoneNumber)}
          title="Click to copy"
        >
          📞 {user.phoneNumber}
          {copied && <span className="profile-copied-text"> Copied!</span>}
        </p>

        <a
          className="profile-whatsapp-link"
          href={user.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          💬 Chat on WhatsApp
        </a>

        <p className="profile-school">🏫 {user.school}</p>
      </div>
    </div>
  );
};

export default ProfilePage;
