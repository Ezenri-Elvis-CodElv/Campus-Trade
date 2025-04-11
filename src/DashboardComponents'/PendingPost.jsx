import React from 'react'
import "./recentpost.css"
import Card from '../components/Card';

const RecentPost = () => {
  const myArr = [
    {
      image: "/public/download.jpg",
      name: "Jimmy choo",
      price: "23,000",
      description: "Offers elegant and fashionable high heels",
      university: "Lagos State University",
    },
    {
      image: "/public/download.jpg",
      name: "Books",
      price: "20,000",
      description: "Description",
      university: "Uni Lag",
    },
    {
      image: "/public/download.jpg",
      name: "Home Appliances",
      price: "30,000",
      description: "My description",
      university: "Yaba Tech",
    },
    {
      image: "/public/download.jpg",
      name: "Home Appliances",
      price: "30,000",
      description: "My description",
      university: "Yaba Tech",
    },
    {
      image: "/public/download.jpg",
      name: "Home Appliances",
      price: "30,000",
      description: "My description",
      university: "Yaba Tech",
    },
    {
      image: "/public/download.jpg",
      name: "Home Appliances",
      price: "30,000",
      description: "My description",
      university: "Yaba Tech",
    },
    {
      image: "/public/download.jpg",
      name: "Home Appliances",
      price: "30,000",
      description: "My description",
      university: "Yaba Tech",
    },
    {
      image: "/public/download.jpg",
      name: "Home Appliances",
      price: "30,000",
      description: "My description",
      university: "Yaba Tech",
    },
    {
      image: "/public/download.jpg",
      name: "Home Appliances",
      price: "30,000",
      description: "My description",
      university: "Yaba Tech",
    },
  ];
  return (
    <div className='recent-body' >
      <div className='recent-text-holder'>
        <h1 className='recent-post'>Pending Posts</h1>
        <br />
        {/* <p className='recent-list'>List of post that's not sold</p> */}
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
