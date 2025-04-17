import React from 'react';
import { useNavigate } from 'react-router-dom';
import './notfoundpage.css';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="notfound-container">
      <img
        src="/images/CAMPUSTRADE-02 1.png"
        alt="Campus Trade Logo"
        className="logo"
      />
      <h1 className="error-code">404</h1>
      <h2 className="error-message">Oops! Page Not Found</h2>
      <p className="error-description">
        The page you're looking for doesn't exist or might have been moved. Let's get you back to trading smarter.
      </p>
      <button className="back-button" onClick={() => navigate('/')}>
        ⬅ Back to Campus Trade
      </button>
    </div>
  );
};

export default NotFoundPage;
