import React, { useState } from 'react'
import "./recentcard.css"
import { useNavigate } from 'react-router'


const RecentCard = ({item}) => {
   const nav = useNavigate();
    const BASE_URL = "https://campustrade-kku1.onrender.com";
    const userData = JSON.parse(localStorage.getItem("userData"));
    const user = JSON.parse(localStorage.getItem("user"));
  
  console.log(item)
  return (
        <> 
    <div className="recent-card" onClick={() => nav(`/productdetailpage/${item.id}`)}>
      <div className="card-img-holder">
        <img src={item?.media[0]}  alt="" />
      </div>
      
      <div className="recent-card-img-name">
        <div className="recent-card-name">
          <p>{item.productName}</p>
        </div>
        <div className="recent-card-prices">
          <p>₦{item.price}</p>
        </div>
      </div>
      <div className="recent-card-img-description">
        <p>{item.description}</p>
        <p>Condition: {item.condition}</p>
      </div>
      <div className="recent-card-uni-name">
        <p>{item.school}</p>
      </div>
      <div className='recent-card-time'><p>{item.time}</p></div>
    </div>
    </>
  
  )
}

export default RecentCard