import { GoHome } from "react-icons/go";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { useNavigate } from "react-router";
import SidebarLinks from "../Elvis/SidebarLinks";
import { Drawer } from "antd";
import "./dashboardheader.css";

const DashboardHeader = () => {
  const nav = useNavigate();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const profile = JSON.parse(localStorage.getItem("user"))?.profilePic;

  console.log(profile)
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
            {
              profile ?
              <img src={profile} alt="Profile" className="dash-profile-picture" /> 
              :
              <img src="/images/profilIcon.jpg" alt="" className="dash-profile-picture"  style={{
                border:"1px solid gray"
              }}/>
            }
          </div>
        </div>
      </div>

      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setShowMobileMenu(false)}
        open={showMobileMenu}
        width="70vw"
        className="mobile-drawer"
      >
        <SidebarLinks closeMenu={() => setShowMobileMenu(false)} />
      </Drawer>
    </header>
  );
};

export default DashboardHeader;
