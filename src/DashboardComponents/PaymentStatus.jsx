import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './paymentstatus.css';
import { useParams } from 'react-router-dom';

const PaymentStatus = () => {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(true);
//   const reference = new URLSearchParams(window.location.search).get('reference');
//   console.log(reference)
    const {ref} = useParams()
  const navigate = useNavigate();
  useEffect(() => {
    const verifyPayment = async () => {
      try {
        const res = await axios.get(`https://campustrade-kku1.onrender.com/api/v1/verify?reference=${ref}`);
        setStatus(res?.data?.data?.status);
        console.log(res)
        console.log(res?.data?.data?.status)
      } catch (error) {
        console.error('Verification error:', error); 
        setStatus('failed');
      } finally {
        setLoading(false);
      }
    };

    if (ref) verifyPayment();
    else setStatus('failed');
  }, []);

//   const handleRedirect = () => {
//     if (status === 'success') {
//       navigate('/dashboard/pendingpost');
//     } else {
//       navigate('pendingposts');
//     }
//   };

  if (loading) {
    return (
      <div className="status-container loading">
        <div className="loader"></div>
        <p>Verifying Payment...</p>
      </div>
    );
  }

  return (
    <div className={`status-container ${status}`}>
      <img src="/images/CAMPUSTRADE-02 1.png" alt="Campus Trade Logo" className="logo" />
      <h1 className='h1text'>{status === "Success" ? 'Payment Successful!' : 'Payment Failed'}</h1>
      <p className='ptext'>
        {status === 'Success'
          ? 'Thank you! Your payment was processed successfully.'
          : 'Oops! Something went wrong with your payment. Please try again or contact support.'}
      </p>
      <button className="action-button" onClick={""}>
        {status === 'Success' ? 'Create Post' : 'Go to Pending Posts'}
      </button>
    </div>
  );
};

export default PaymentStatus;