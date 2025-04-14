import React from 'react'
import "./recentpost.css"
import Card from '../components/Card';
import shoe from "../assets/download.jpg";


const RecentPost = () => {
  const myArr = [
      {
        image: `${shoe}`,
        name: "Jimmy choo",
        price: "23,000",
        description: "Offers elegant and fashionable high heels",
        university: "Lagos State University",
        time: "28 mins ago",
      },
      {
        image: `${shoe}`,
        name: "Books",
        price: "20,000",
        description: "My description",
        university: "Uni Lag",
        time: "28 mins ago",
      },
      {
        image: `${shoe}`,
  
        name: "Home Appliances",
        price: "30,000",
        description: "My description",
        university: "Yaba Tech",
        time: "28 mins ago",
      },
      {
        image: `${shoe}`,
  
        name: "Home Appliances",
        price: "30,000",
        description: "My description",
        university: "Yaba Tech",
        time: "28 mins ago",
      },
      {
        image: `${shoe}`,
  
        name: "Home Appliances",
        price: "30,000",
        description: "My description",
        university: "Yaba Tech",
        time: "28 mins ago",
      },
      {
        image: `${shoe}`,
  
        name: "Home Appliances",
        price: "30,000",
        description: "My description",
        university: "Yaba Tech",
        time: "28 mins ago",
      },
      {
        image: `${shoe}`,
  
        name: "Home Appliances",
        price: "30,000",
        description: "My description",
        university: "Yaba Tech",
        time: "28 mins ago",
      },
      {
        image: `${shoe}`,
  
        name: "Home Appliances",
        price: "30,000",
        description: "My description",
        university: "Yaba Tech",
        time: "28 mins ago",
      },
      {
        image: `${shoe}`,
  
        name: "Home Appliances",
        price: "30,000",
        description: "My description",
        university: "Yaba Tech",
        time: "28 mins ago",
      },
      {
        image: `${shoe}`,
  
        name: "Home Appliances",
        price: "30,000",
        description: "My description",
        university: "Yaba Tech",
        time: "28 mins ago",
      },
      {
        image: `${shoe}`,
  
        name: "Home Appliances",
        price: "30,000",
        description: "My description",
        university: "Yaba Tech",
        time: "28 mins ago",
      },
      {
        image: `${shoe}`,
  
        name: "Home Appliances",
        price: "30,000",
        description: "My description",
        university: "Yaba Tech",
        time: "28 mins ago",
      },
    ];
  return (
    <div className='recent-body' >
      <div className='recent-text-holder'>
        <h1 className='recent-post'>Your recent posts</h1>
        <br />
        <p className='recent-list'>List of post that's not sold</p>
      </div>
      <section className='recent-product-holder'>
       
              {myArr.map((item, index) => (
                <Card key={index} item={item}/>
              ))}
      </section>

    </div>
  )
}

export default RecentPost