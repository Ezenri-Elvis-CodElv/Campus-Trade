import React, { useEffect, useState } from 'react'
import "./recentpost.css"
import Card from '../components/Card';
import shoe from "../../public/images/download.jpg";
import axios from 'axios';


const RecentPost = () => {
const [pendingproducts, setPendingProducts] = useState([]);
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

const baseUrl = "http://campustrade-kku.onrender.com"

useEffect(() => {
  const PendingProduct = async () => {
  setLoading(true);
  try{
    const res = await axios.get(`${baseUrl}/product/all-pending-product`);
    console.log(res)
    // const data = await res.json();
    // console.log(data);
    setPendingProducts(res.data);
  }catch(error){
    setError(error.data);
    console.log(error);
  }
  finally{
    setLoading(false);
  }
  }
  PendingProduct();
},[])
  
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
        <h1 className='recent-post'>Pending Posts</h1>
        {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
        <br />
        {/* <p className='recent-list'>List of post that's not sold</p> */}
      </div>
      <section className='recent-product-holder'>
       
      {pendingproducts.length > 0 ? (
          pendingproducts.myArr.map((item, index) => (
            <Card
              key={index}
              item={{
                image: item.image || shoe,
                name: item.name,
                price: item.price,
                description: item.description,
                university: item.university || 'Unknown School',
                time: item.createdAt || 'Just now',
              }}
            />
          ))
        ) : (
          !loading && <p>No pending posts found.</p>
        )}
      </section>

    </div>
  )
}
export default RecentPost
