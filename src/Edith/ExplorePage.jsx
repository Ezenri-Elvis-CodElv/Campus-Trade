import React, { useEffect, useState, useContext } from "react";
import RecentCard from "../components/RecentCard";
import "./explore.css";
import HeroImage from "../assets/WhatsApp Image 2025-04-13 at 13.19.06_f73cd826.jpg";
import AdsImg from "../../public/images/Frame 659.jpg";
import axios from "axios";
import { SearchContext } from "../context/SearchProducts";

const ExplorePage = () => {
  const { searchQuery } = useContext(SearchContext);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const getRecentProduct = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          "https://campustrade-kku1.onrender.com/api/v1/products"
        );
        setProducts(response?.data?.data || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    getRecentProduct();
  }, []);
  
  const filteredProducts = React.useMemo(() => {
    if (!searchQuery || searchQuery.trim() === "") {
      return products;
    }
    
    const normalizedQuery = searchQuery.trim().toLowerCase();
    
    return products.filter(product => {
      const productName = product?.productName;
      return productName && productName.toLowerCase().includes(normalizedQuery);
    });
  }, [products, searchQuery]);

  return (
    <div className="explore-page">
      <div className="explore-img-holder">
        <img src={HeroImage} alt="Explore Hero" />
      </div>
      
      <div className="explore-text">
        <div className="explore-header">
          <div className="explore-pop">
            <p className="explore-h">Popular posts</p>
          </div>
          <br />
          <div className="explore-details">
            <p className="explore-p">
              Check out our popular posts of the different categories from verified <br />
              students in campustrade
            </p>
          </div>
        </div>
      </div>
      
      <section className="explore-card-holder">
        {isLoading ? (
          <p style={{color:"purple"}}>Loading products...</p>
        ) : filteredProducts.length > 0 ? (
          filteredProducts.map((item, index) => (
            <RecentCard key={item.id || index} item={item} />
          ))
        ) : (
          <p>No products found matching "{searchQuery}"</p>
        )}
      </section>
      
      <article className="explore-Ads">
        <img src={AdsImg} alt="Advertisement" />
      </article>
    </div>
  );
};

export default ExplorePage;