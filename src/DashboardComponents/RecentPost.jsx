import React, {  useEffect, useState } from 'react'
import "./recentpost.css"
import Card from '../components/Card';
import shoe from "../../public/images/download.jpg";
import  axios from 'axios';


const RecentPost = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const RecentProduct = async () => {
      try{
        const res = await axios.get(`${baseUrl}/api/v1/products`);
        console.log(res)
        const data = await res.json();
        console.log(data);
        setProducts(res.data);
      
      }catch(error){
        setError(error.data);
      }
      finally{
        setLoading(false);
      }
    }
    RecentProduct();
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
        <h1 className='recent-post'>Your recent posts</h1>
        <br />
        <p className='recent-list'>List of post that's not sold</p>
      </div>
      {loading && <p>Loading products...</p>}
      {error && <p className="error-message">{error}</p>}
      <section className='recent-product-holder'>
       
      {products.map((item, index) => (
          <Card
            key={index}
            item={{
              ...item,
              image: item.image || shoe, // fallback image
            }}
          />
        ))}
      </section>

    </div>
  )
}

export default RecentPost