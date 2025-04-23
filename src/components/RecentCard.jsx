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
    <div className="card" onClick={() => nav(`/productdetailpage/${item.id}`)}>
      <div className="card-img-holder">
        <img src={item?.media[0]}  alt="" />
      </div>
      
      <div className="card-img-name">
        <div className="card-name">
          <p>{item.productName}</p>
        </div>
        <div className="card-prices">
          <p>₦{item.price}</p>
        </div>
      </div>
      <div className="card-img-description">
        <p>{item.description}</p>
        <p>Condition: {item.condition}</p>
      </div>
      <div className="card-uni-name">
        <p>{item.school}</p>
      </div>
      <div className='card-time'><p>{item.time}</p></div>
    </div>
    </>
  
  )
}

export default RecentCard