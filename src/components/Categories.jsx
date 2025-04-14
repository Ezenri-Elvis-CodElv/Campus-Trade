import React from "react";
import "./categories.css";
import { MdNavigateNext } from "react-icons/md";
import Card from "../components/Card";
import Frame from "../assets/Frame 386.jpg";
import shoe from "../assets/download.jpg";

const Categories = () => {
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
        <img src={Frame} alt="" />
      </div>
      <div className="category-text-wrappers">
        <div className="text-holder">
          <div className="top-text">
            <span style={{ color: " #03045E", fontWeight: "bold" }}>Home</span>
            <span className="icon">
              {" "}
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
