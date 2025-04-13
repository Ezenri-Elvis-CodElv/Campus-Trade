import React from "react";
import "./Loader.css";
import logo from "../../public/images/CAMPUSTRADE-02 1.png"; 

const Loader = () => {
  return (
    <div className="loaderOverlay">
      <div className="loaderContainer">
        <div className="spinningCircle"></div>
        <img src={logo} alt="CampusTrade Logo" className="loaderLogo" />
      </div>
    </div>
  );
};

export default Loader;
