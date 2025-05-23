import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import './paymentstatus.css';

const PaymentStatus = () => {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const reference = new URLSearchParams(window.location.search).get('reference');
  console.log(reference);
  
  const navigate = useNavigate();

  useEffect(() => {
    const verifyPayment = async () => {
      try {
        const res = await axios.get(`https://campustrade-kku1.onrender.com/api/v1/verify?reference=${reference}`);
        setStatus(res?.data?.data?.status);
          setTimeout(() => {
            navigate("/dashboard/recentpost")
          }, 3000);
        console.log(res)
      } catch (error) {
        console.error('Verification error:', error); 
        setStatus('failed');
      } finally {
        setLoading(false);
      }
    };

    if (reference) verifyPayment();
    else setStatus('failed');
  }, [reference]);

  const handleRedirect = () => {
    if (status === 'success') {
      navigate('createpost');
    } else {
      navigate('pendingposts');
    }
  };

  if (loading) {
    return (
      <div className="status-container loading">
        <div className="loader"></div>
        <p>Verifying Payment....</p>
      </div>
    );
  }

  return (
    <div className={`status-container ${status}`}>
      <img src="/images/CAMPUSTRADE-02 1.png" alt="Campus Trade Logo" className="logo" />
      <h1 className='h1text'>{status === 'Success' ? 'Payment Successful!' : 'Payment Failed'}</h1>
      <p className='ptext'>
        {status === 'Success'
          ? 'Thank you! Your payment was processed successfully.'
          : 'Oops! Something went wrong with your payment. Please try again or contact support.'}
      </p>
      {/* <button className="action-button" onClick={handleRedirect}>
        {status === 'success' ? 'Create Post' : 'Go to Pending Posts'}
      </button> */}
    </div>
  );
};

export default PaymentStatus;
