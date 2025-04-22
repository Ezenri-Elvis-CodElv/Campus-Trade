import React, { useEffect, useState } from "react";
import "./recentpost.css";
import Card from "../components/Card";
import axios from "axios";

const RecentPost = () => {
  const [products, setProducts] = useState([]);
  const userId = JSON.parse(localStorage.getItem("userData"))?.data?.id;


  const getRecentProduct = async () => {
    try {
      const response = await axios.get(
        `https://campustrade-kku1.onrender.com/api/v1/all-pending-product${userId}`
      );
      setProducts(response?.data?.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    getRecentProduct();
  }, []);

  return (
    <div className="recent-body">
      <div className="recent-text-holder">
        <h1 className="recent-post">Pending Posts</h1>
        <br />
      </div>
      <section className="recent-product-holder">
        {products.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </section>
    </div>
  );
};
export default RecentPost;
