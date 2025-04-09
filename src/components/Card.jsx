import React from 'react'
import "./card.css"

const Card = ({item}) => {
  return (
        <> 
    <div className="card">
      <div className="img-holder">
        <img src={item.image} alt="" />
      </div>
      
      <div className="img-name">
        <div className="name">
          <p>{item.name}</p>
        </div>
        <div className="price">
          <p>₦{item.price}</p>
        </div>
      </div>
      <div className="img-description">
        <p>{item.description}</p>
      </div>
      <div className="uni-name">
        <p>{item.university}</p>
      </div>
    </div>
    </>
  
  )
}

export default Card