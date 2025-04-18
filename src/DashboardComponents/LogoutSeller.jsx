import React, { useState } from 'react';
import { Modal } from 'antd';
import axios from 'axios';
import { useParams } from 'react-router';
import "./logoutseller.css";

const LogoutSeller = () => {
  const [open, setOpen]=useState(true)
  const url = 'https://campustrade-kku1.onrender.com/api/v1/seller/signout'
  const {token} = useParams()
  const handlelogout = async () =>{
    try{
      const res = await axios.post(url,{},{headers:{
        Authorization: `Bearer: ${token}`
      }})
      console.log(res)
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div className="logout-container">
      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
        closable={false}
        centered
        className="logout-modal"
      >
        <h2 className="logout-title">Log out ?</h2>
        <p className="logout-desc">Are you sure you want to log out of <br></br>campustrade<span>.</span></p>
        <div className="logout-actions">
          <button className="cancel-button" onClick={() => setOpen(false)}>Cancel</button>
          <button className="logout-button"onClick={handlelogout}>Log out</button>
        </div>
      </Modal>
    </div>
  );
};

export default LogoutSeller;
