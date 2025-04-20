
import React from "react";
import Card from "../components/Card";
import "./explore.css";
import HeroImage from "../assets/WhatsApp Image 2025-04-13 at 13.19.06_f73cd826.jpg"
import AdsImg from "../../public/images/Frame 659.jpg"
import shoe from "../../public/images/download.jpg";



const ExplorePage = () => {
   const myArr = [
     {
       media: `${shoe}`,
       name: "Jimmy choo",
       price: "23,000",
       description: "Offers elegant and fashionable high heels",
       university: "Lagos State University",
       time: "28 mins ago",
     },
     {
       media: `${shoe}`,
       name: "Books",
       price: "20,000",
       description: "My description",
       university: "Uni Lag",
       time: "28 mins ago",
     },
     {
       media: `${shoe}`,
 
       name: "Home Appliances",
       price: "30,000",
       description: "My description",
       university: "Yaba Tech",
       time: "28 mins ago",
     },
     {
       media: `${shoe}`,
 
       name: "Home Appliances",
       price: "30,000",
       description: "My description",
       university: "Yaba Tech",
       time: "28 mins ago",
     },
     {
      media: `${shoe}`,
  
       name: "Home Appliances",
       price: "30,000",
       description: "My description",
       university: "Yaba Tech",
       time: "28 mins ago",
     },
     {
      media: `${shoe}`,
 
       name: "Home Appliances",
       price: "30,000",
       description: "My description",
       university: "Yaba Tech",
       time: "28 mins ago",
     },
     {
      media: `${shoe}`,
 
       name: "Home Appliances",
       price: "30,000",
       description: "My description",
       university: "Yaba Tech",
       time: "28 mins ago",
     },
     {
      media: `${shoe}`,
 
       name: "Home Appliances",
       price: "30,000",
       description: "My description",
       university: "Yaba Tech",
       time: "28 mins ago",
     },
     {
      media: `${shoe}`,
 
       name: "Home Appliances",
       price: "30,000",
       description: "My description",
       university: "Yaba Tech",
       time: "28 mins ago",
     },
     {
      media: `${shoe}`,
 
       name: "Home Appliances",
       price: "30,000",
       description: "My description",
       university: "Yaba Tech",
       time: "28 mins ago",
     },
     {
      media: `${shoe}`,
 
       name: "Home Appliances",
       price: "30,000",
       description: "My description",
       university: "Yaba Tech",
       time: "28 mins ago",
     },
     {
      media: `${shoe}`,
 
       name: "Home Appliances",
       price: "30,000",
       description: "My description",
       university: "Yaba Tech",
       time: "28 mins ago",
     },
   ];
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
        {myArr.map((item, index) => (
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
