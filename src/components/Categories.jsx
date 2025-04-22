import React, { useEffect, useRef, useState } from "react";
import "./categories.css";
import { MdNavigateNext } from "react-icons/md";
import Card from "../components/Card";
import shoe from "../../public/images/download.jpg";
import { Carousel } from "antd";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const BASE_URL = "https://campustrade-kku1.onrender.com";
const Categories = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  const [selectedOption, setSelectedOption] = useState("New");

  const getProductCategory = async (selected) => {
    try {
      const res = await axios.get(
        `${BASE_URL}/api/v1/all-products-by-subcategory/${id}`
      );

      const fetchedData = res.data.data;
      console.log(fetchedData);

      const filteredData = fetchedData.filter(
        (product) => product.condition === selected
      );
      console.log(filteredData);
      setData(filteredData);
      // setData(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProductCategory(selectedOption);
  }, [selectedOption]);

  const handleSelection = (option) => {
    setSelectedOption(option);
  };

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
              <h3 style={contentStyle}>
                <img src="/images/Shoe.jpg" alt="" />
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>
                <img src="/images/Jeans.jpg" alt="" />
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>
                <img src="/images/Heels.jpg" alt="" />
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>
                <img src="/images/matrass.jpg" alt="" />
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>
                <img src="/images/Shoe.jpg" alt="" />
              </h3>
            </div>
            <div>
              <h3 style={contentStyle}>
                <img src="/images/Heels.jpg" alt="" />
              </h3>
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

          <>
            <div className="w-32 p-2 h-14 items-center bg-gray-200 flex rounded-xl justify-between  cursor-pointer mt-3 ">
              <p
                onClick={() => handleSelection("New")}
                className={`p-3 px-4 rounded-xl cursor-pointer ${
                  selectedOption === "New"
                    ? "bg-[#03045E] text-white"
                    : "bg-gray-200 text-primary-dark"
                }`}
              >
                New
              </p>
              <p
                onClick={() => handleSelection("Used")}
                className={`p-3 px-4 rounded-xl cursor-pointer ${
                  selectedOption === "Used"
                    ? "bg-[#03045E] text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                Used
              </p>
            </div>
          </>
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
        {data?.map((item) => (
          <Link to={`/productdetailpage/${item?.id}`}>
            <Card key={item.id} item={item} />
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Categories;
