
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import "./explore.css";
import HeroImage from "../assets/WhatsApp Image 2025-04-13 at 13.19.06_f73cd826.jpg"
import AdsImg from "../../public/images/Frame 659.jpg"
import shoe from "../../public/images/download.jpg";
import axios from "axios";



const ExplorePage = () => {
  const [products, setProducts] = useState([]);

  const getRecentProduct = async () => {
    try {
      const response = await axios.get(
        `https://campustrade-kku1.onrender.com/api/v1/products`
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
    <div className="explore-page">
      
      <div className="explore-img-holder">
        <img src= {HeroImage} alt="" />

      </div>
      <div className="explore-text">
        <div className="explore-header">
          <div className="explore-pop">
          <p className="explore-h">Popular post</p>

          </div>
          <br />
          <div className="explore-details">
          <p className="explore-p">check out our popular post  of the different categories from verified <br />
           student in campustrade </p>

          </div>
        </div>
      </div>

        <section className="explore-card-holder">
        {products.map((item, index) => (
        <Card key={index} item={item} />
      ))}

        </section>
        
        <article className="explore-Ads">
          <img src={AdsImg} alt="" />

        </article>
      </div>

  );
};

export default ExplorePage;
