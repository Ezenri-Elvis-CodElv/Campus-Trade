import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheckCircle, FaTimesCircle, FaArrowLeft } from 'react-icons/fa';
import './verification.css';

const Verification = () => {
  const [verificationStatus, setVerificationStatus] = useState('verifying');
  const navigate = useNavigate();

  useEffect(() => {
    const verifyAccount = async () => {
      try {
        const isSuccessful = true; // Change this to test different states
        setTimeout(() => {
          setVerificationStatus(isSuccessful ? 'success' : 'failed');
        }, 3000);
      } catch (error) {
        setVerificationStatus('failed');
      }
    };
    
    verifyAccount();
  }, []);

  return (
    <div className="verification-overlay">
      <div className="verification-container">
        {verificationStatus === 'verifying' ? (
          <div className="verification-loading">
            <div className="verification-spinner"></div>
            <div className="verification-content">
              <img 
                src="/images/CAMPUSTRADE-02 1.png" 
                alt="CampusTrade Logo" 
                className="verification-logo" 
              />
              <p className="verification-loading-text">Verifying...</p>
            </div>
          </div>
        ) : verificationStatus === 'success' ? (
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
              <h1 className="verification-success-title">Verification Successful!</h1>
              <p className="verification-success-message">
                Your account has been successfully verified
              </p>
              <button 
                className="verification-success-button" 
                onClick={() => navigate('/dashboard')}
              >
                Continue to Dashboard
              </button>
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
                We couldn't verify your account. Please try again.
              </p>
              <button 
                className="verification-retry-button" 
                onClick={() => navigate(-1)}
              >
                <FaArrowLeft />
                Try Again
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Verification;