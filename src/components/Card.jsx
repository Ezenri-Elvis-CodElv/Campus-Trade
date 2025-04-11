import React from 'react'
import "./card.css"
import { useNavigate } from 'react-router'

const Card = ({item, index}) => {
  const nav = useNavigate()
  console.log(item)
  return (
        <> 
    <div className="card" onClick={() => nav(`/productdetailpage/${index}`)}>
      <div className="card-img-holder">
        <img src={item.image} alt="" />
      </div>
      
      <div className="card-img-name">
        <div className="card-name">
          <p>{item.name}</p>
        </div>
        <div className="card-prices">
          <p>₦{item.price}</p>
        </div>
      </div>
      <div className="card-img-description">
        <p>{item.description}</p>
      </div>
      <div className="card-uni-name">
        <p>{item.university}</p>
      </div>
      <div className='card-time'><p>{item.time}</p></div>
    </div>
    </>
  
  )
}

export default Card