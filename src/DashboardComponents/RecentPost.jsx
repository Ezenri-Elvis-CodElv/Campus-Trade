import React, { useEffect, useState } from "react";
import "./recentpost.css";
import axios from "axios";
import RecentCard from "../components/RecentCard";

const RecentPost = () => {
  const [products, setProducts] = useState([]);
  const [loading,setLoading] = useState(true)
  const userId = JSON.parse(localStorage.getItem("userData"))?.data?.id;

  const getRecentProduct = async () => {
    try {
      const response = await axios.get(
        `https://campustrade-kku1.onrender.com/api/v1/recent-products/${userId}`
      );
      setProducts(response?.data?.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    getRecentProduct();
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }, []);

  if (loading) {
    return (
      <div className="status-containers loadings">
        <div className="loaders"></div>
        <p>Getting recent posts...</p>
      </div>
    );
  }

  return (
    <div className="recent-body">
      <div className="recent-text-holder">
        <h1 className="recent-post">Your recent posts</h1>
        <br />
      </div>
      <section className="recent-product-holder">
      {
          products.length <= 0 ? "No Recent post" : 
        <>
            {products.map((item, index) => (
            <RecentCard key={index} item={item} />
          ))}
        </>
        }
      </section>
    </div>
  );
};

export default RecentPost;
