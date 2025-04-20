import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import axios from "axios";
import "./verification.css";

const Verification = () => {
  const [verificationStatus, setVerificationStatus] = useState("verifying");
  const navigate = useNavigate();
  const { token } = useParams();

  const url = `https://campustrade-kku1.onrender.com/api/v1/seller/verify-user/${token}`;

  useEffect(() => {
    const verifyAccount = async () => {
      try {
        await axios.get(url, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        console.log("Token:", token);
        setTimeout(() => {
          setVerificationStatus("success");
          setTimeout(() => navigate("/login"), 2000);
        }, 3000);
      } catch (error) {
        setTimeout(() => setVerificationStatus("failed"), 3000);
      }
    };

    verifyAccount();

    document.title = "CampusTrade | Verifying";
  }, [url, token]);

  return (
    <div className="verification-overlay">
      <div className="verification-container">
        {verificationStatus === "verifying" ? (
          <div className="verification-loading">
            <div className="verification-spinner">
              <img
                src="/images/CAMPUSTRADE-02 1.png"
                alt="CampusTrade Logo"
                className="verification-logo-inside"
              />
            </div>
            <p className="verification-loading-text">Verifying...</p>
          </div>
        ) : verificationStatus === "success" ? (
          <div className="verification-success">
            <div className="verification-success-circle">
              <FaCheckCircle className="verification-success-icon" />
            </div>
            <div className="verification-content">
              <img
                src="/images/CAMPUSTRADE-02 1.png"
                alt="CampusTrade Logo"
                className="verification-logo"
              />
              <h1 className="verification-success-title">
                Verification Successful!
              </h1>
              <p className="verification-success-message">
                Your account has been successfully verified. Redirecting to
                login...
              </p>
            </div>
          </div>
        ) : (
          <div className="verification-error">
            <div className="verification-error-circle">
              <FaTimesCircle className="verification-error-icon" />
            </div>
            <div className="verification-content">
              <img
                src="/images/CAMPUSTRADE-02 1.png"
                alt="CampusTrade Logo"
                className="verification-logo"
              />
              <h1 className="verification-error-title">Verification Failed</h1>
              <p className="verification-error-message">
                We couldn't verify your account. Please try again later.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Verification;
