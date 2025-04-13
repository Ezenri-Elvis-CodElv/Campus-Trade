
import React from "react";
import Card from "../components/Card";
import "./explore.css";

const ExplorePage = () => {
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
    <div className="explore-page">
      
      <div className="explore-img-holder">
        <div className="img-text">
          <h1>
          Explore More, Trade Smarter
          <br /> 
          Find the Best Deals on 
          <br />Campustrade
          </h1>
        </div>
      </div>
      <div className="explore-text">
        <div className="explore-header">
          <div className="explore-pop">
          <p>Popular post</p>

          </div>
          <br />
          <div className="explore-details">
          <p>check out our popular post  of the different categories from verified <br /> student in campustrade </p>

          </div>
        </div>
      </div>

        <section className="card-holder">
        {myArr.map((item, index) => (
        <Card key={index} item={item} />
      ))}

        </section>
        
        <article className="Ads">
          <img src="/Frame 659.jpg" alt="" />

        </article>
      </div>

  );
};

export default ExplorePage;
