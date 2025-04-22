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
        `https://campustrade-kku1.onrender.com/api/v1/recent-products/${userId}`
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
        <h1 className="recent-post">Your recent posts</h1>
        <br />
        <p className="recent-list">List of post that's not sold</p>
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
