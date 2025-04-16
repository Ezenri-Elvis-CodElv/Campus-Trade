import { GoHome } from "react-icons/go";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { useNavigate } from "react-router";
import SidebarLinks from "../Elvis/SidebarLinks"; 
import "./dashboardheader.css";

const DashboardHeader = () => {
  const nav = useNavigate();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMenu = () => setShowMobileMenu(!showMobileMenu);

  return (
    <header className="dashboard-header">
      <div className="dashboard-header-content">
        <div className="dashboard-header-content-leftside">
          <img
            src="/images/CAMPUSTRADE-02 1.png"
            alt="Logo"
            onClick={() => nav("/")}
            className="ImageLogoDash"
          />
        </div>

        <div className="burger-menu" onClick={toggleMenu}>
          <GiHamburgerMenu size={28} />
        </div>

        <div className="dashboard-header-content-rightside">
          <div className="dashboard-content-home" onClick={() => nav("/")}>
            <GoHome size={20} style={{ color: "orange" }} />
            <p className="content-p-tag">Home</p>
          </div>
          
          <div className="dashboard-content-img">
            <img
              src="/images/dasboadprofile.jpg"
              alt="Profile"
              className="dash-profile-picture"
            />
          </div>
        </div>
      </div>

      {showMobileMenu && (
        <div className="mobile-dropdown-menu">
          <SidebarLinks closeMenu={() => setShowMobileMenu(false)} />
        </div>
      )}
    </header>
  );
};

export default DashboardHeader;
