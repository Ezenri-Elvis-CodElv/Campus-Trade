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
<<<<<<< HEAD
    {
      image: "/public/download.jpg",
      name: "Home Appliances",
      price: "30,000",
      description: "My description",
      university: "Yaba Tech",
    },
=======
>>>>>>> 8c227aaa1bc0f41ac3234cab32fc1cda5f228aa9
  ];
  return (
    <div className='recent-body' >
      <div className='recent-text-holder'>
<<<<<<< HEAD
        <h1 className='recent-post'>Pending Posts</h1>
        <br />
        {/* <p className='recent-list'>List of post that's not sold</p> */}
=======
        <h1 className='recent-post'>Your pending posts</h1>
        <br />
        <p className='recent-list'>List of post that's not sold</p>
>>>>>>> 8c227aaa1bc0f41ac3234cab32fc1cda5f228aa9
      </div>
      <section className='recent-product-holder'>
       
              {myArr.map((item, index) => (
                <Card key={index} item={item}/>
              ))}
      </section>

    </div>
  )
}

<<<<<<< HEAD
export default RecentPost
=======
export default RecentPost
>>>>>>> 8c227aaa1bc0f41ac3234cab32fc1cda5f228aa9
