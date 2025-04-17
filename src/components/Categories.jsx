import React, { useEffect, useRef } from "react";
import "./categories.css";
import { MdNavigateNext } from "react-icons/md";
import Card from "../components/Card";
import shoe from "../../public/images/download.jpg";
import { Carousel } from "antd";
import axios from "axios";


const BASE_URL = "https://campustrade-kku1.onrender.com"
const Categories = () => {
  const getProductCategory =  async () => {
    try{
      const res = await axios.get(`${BASE_URL}/api/v1/all-categories`) 
      console.log(res)
}
    catch(error)
    {
console.log(error)
    }
  }
  useEffect (()=>{
getProductCategory()
  }, [])
  const contentStyle = {
    height: "400px",
    width: "1400px",
    color: "white",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
    fontSize: "24px",
  };

  const carouselRef = useRef(null);

  const handlePrev = () => {
    carouselRef.current.prev();
  };

  const handleNext = () => {
    carouselRef.current.next();
  };

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
    <div className="category-body">
      <div className="category-img">
        <div style={{ position: "relative", width: "100%", margin: "auto" }}>
          <Carousel autoplay ref={carouselRef}>
            <div>
              <h3 style={contentStyle}>
                {" "}
                <img src="/images/Shirt.jpg" alt="/images/matrass.jpg" />
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}><img src="/images/Shoe.jpg" alt="" /></h3>
            </div>
            <div>
              <h3 style={contentStyle}><img src="/images/Jeans.jpg" alt="" /></h3>
            </div>
            <div>
              <h3 style={contentStyle}><img src="/images/Heels.jpg" alt="" /></h3>
            </div>
            <div>
              <h3 style={contentStyle}><img src="/images/matrass.jpg" alt="" /></h3>
            </div>
            <div>
              <h3 style={contentStyle}><img src="/images/Shoe.jpg" alt="" /></h3>
            </div>
            <div>
              <h3 style={contentStyle}><img src="/images/Heels.jpg" alt="" /></h3>
            </div>
          </Carousel>
        </div>
      </div>

      <div className="category-text-wrappers">
        <div className="text-holder">
          <div className="top-text">
            <span style={{ color: " #03045E", fontWeight: "bold" }}>Home</span>
            <span className="icon">
              <MdNavigateNext />
            </span>
            <span style={{ color: "#FF6D00" }}>Shirts</span>
          </div>

          <div className="category-button-holder">
            <div className="category-toggle">
              <span className="category-used">Used</span>
              <span className="New-toggle">New</span>
            </div>
          </div>
        </div>

        <div className="buttom-text">
          <span style={{ fontWeight: "bold", color: "#03045E" }}>Shirts</span>
          <br />
          <span className="checkout-text" style={{ fontSize: "smaller" }}>
            Checkout some other similar upload from other sellers
          </span>
        </div>
      </div>

      <section className="category-product">
        {myArr.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </section>
    </div>
  );
};

export default Categories;
