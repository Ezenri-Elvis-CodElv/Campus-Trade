import React, { use, useEffect } from "react";
import Card from "../components/Card";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import Location from "../components/detailPage/Location";
import { LuBadgeCheck } from "react-icons/lu";
import { IoCopy } from "react-icons/io5";
import { IoMdArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { TbCurrencyNaira } from "react-icons/tb";
import { BsWhatsapp } from "react-icons/bs";
import axios from "axios";
import { BsFillGeoAltFill } from "react-icons/bs";
import "./productdetailpagesecond.css";

const BASE_URL = "https://campustrade-kku1.onrender.com";

const ProductDetailPage = () => {
  const nav = useNavigate();
  const [active, setActive] = useState("");
  const [userId, setUserId] = useState("");
  const [UserProfile, setUserProfile] = useState({});
  const { id } = useParams();
  const [data, setData] = useState({});

  const phoneNumber = "09192298383";
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  const getButtonStyle = (side) => {
    const isActive = active === side;

    return {
      padding: "12px 26px",
      backgroundColor: isActive ? "#240046" : "transparent",
      color: isActive ? "#ddd" : "#240046",
      border: "none",
      cursor: "pointer",
      transition: "0.3s ease",
      borderRadius: "30px",
    };
  };

  const getProductCategory = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/api/v1/oneproduct/${id}`);
      const productData = res?.data?.data;

      setData(productData);
      setUserId(productData?.seller?.id);
      console.log(userId);
      const sellerId = productData?.seller?.id;
      console.log("Seller ID:", sellerId);

      const sellerInfo = await axios.get(
        `https://campustrade-kku1.onrender.com/api/v1/kyc/get-kyc-details/${sellerId}`
      );
      setUserProfile(sellerInfo?.data?.data?.SellerKYCs);

    } catch (error) {
      console.log("this error", error);
    }
  };
  useEffect(() => {
    getProductCategory();
  }, []);

  console.log("User Profile:", UserProfile);

  return (
    <section className="section ">
      <div className="body ">
        <div className="detailPageInfo">
          <div className="detailProductinfo">
            <img
              className="detailedProductImage"
              src={data?.media?.[0]}
              alt="Phone"
            />
            <div className="detailedProductInfo">
              <h3 className="projectinfo">{data.productName}</h3>
              <p className="projectinfo1">
                {" "}
                <TbCurrencyNaira size={30} />
                {data.price}
              </p>
            </div>
          </div>
          <div className="detailProductLocation">
            <h3 className="locate">School</h3>
            <div className="detailProduction">
              <BsFillGeoAltFill />
              <p className="p">{data?.school}</p>
            </div>
          </div>
          <div className="condition">
            <h3 className="projectinfo2">Condition</h3>
            <div className="body1">
              <button
                className=""
                btwn
                style={getButtonStyle("New")}
                onClick={() => setActive("New")}
              >
                {data.condition}
              </button>
            </div>
          </div>
          <div className="description">
            <h3 className="projectinfo3">Description</h3>
            <div className="info4">
              <h1 className="projectinfo4">{data?.description}</h1>
            </div>
          </div>
        </div>

        <div className="profileAndPreviousPageButton">
          <div className="profileAndAds">
            <div className="profileAndDetails">
              <div className="profile">
                <div className="profilePicAndDetails">
                  <img
                    className="profilePic"
                    src={UserProfile?.profilePic}
                    alt="Phone"
                  />
                  <div className="opendiv">
                    <div className="profileName">
                      <h2 className="joansamuelh2">{UserProfile?.fullName}</h2>
                      <LuBadgeCheck size={20} />
                    </div>
                    <div className="profileDateAndLink">
                      <h4 className="membersincejanuary">
                        Member since January 2025
                      </h4>
                      <button
                        className="obvlickbtn"
                        onClick={() => nav(`/ProfilePage/${UserProfile?.id}`)}
                      >
                        <span className="spamm">See profile</span>
                        <IoIosArrowForward size={18} />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="profileContact">
                  <button className="contact phoneNumber">
                    {copied ? (
                      (spans) => (
                        <span style={{ marginLeft: "8px", color: "green" }}>
                          Copied!
                        </span>
                      )
                    ) : (
                      <IoCopy
                        size={20}
                        onClick={handleCopy}
                        style={{ cursor: "pointer", marginRight: "8px" }}
                      />
                    )}
                    <a href={`tel:${phoneNumber}`}>{UserProfile?.phoneNumber}</a>
                    {copied && (
                      <span style={{ marginLeft: "8px", color: "green" }}>
                        Copied!
                      </span>
                    )}
                  </button>
                  <button className="contact whatsapp">
                    <BsWhatsapp size={25} style={{ color: "green" }} />
                    <a href={UserProfile?.whatsappLink}>
                      Chat via whatsapp
                    </a>
                  </button>
                </div>
              </div>
              {data.school}
            </div>
            <div className="ads">
              <h4 className="adsnumber">AD number: 08970u</h4>

              <img src={data?.media?.[0]} />
            </div>
          </div>
          <button className="previousPage">
            <IoMdArrowBack />
            <span className="goback" onClick={() => nav("/")}>
              Go Back To The Previous Page
            </span>
          </button>
        </div>
      </div>

      <div className="devices"></div>
    </section>
  );
};

export default ProductDetailPage;
