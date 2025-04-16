import { useState } from "react";
import { GoHome } from "react-icons/go";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router";
import "./adminheader.css";
import AdminSidebar from "./AdminSidebar"; // for mobile dropdown

const AdminHeader = () => {
  const nav = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  return (
    <>
      <header className="admin-dashboard-header">
        <div className="admin-dashboard-header-content">
          <div className="admin-dashboard-header-content-leftside">
            <img
              src="/images/CAMPUSTRADE-02 1.png"
              alt="logo"
              className="admin-ImageLogoDash"
              onClick={() => nav("/")}
            />
          </div>

          <div className="admin-dashboard-header-content-rightside desktop-only">
            <div className="admin-dasboard-content-home" onClick={() => nav("/")}>
              <GoHome size={20} style={{ color: "white" }} />
              <p className="admin-content-p-tag">Home</p>
            </div>
            <div className="admin-dasboard-content-notification" onClick={() => nav("/notification")}>
              <MdOutlineNotificationsActive size={20} style={{ color: "white" }} />
              <p className="admin-content-p-tag">Notification</p>
            </div>
            <div className="admin-dasboard-content-img">
              <img src="/images/dasboadprofile.jpg" alt="profile" className="admin-dash-profile-picture" />
            </div>
          </div>

          {/* Hamburger Icon - Mobile Only */}
          <div className="mobile-only" onClick={toggleDropdown}>
            <GiHamburgerMenu size={24} color="white" />
          </div>
        </div>
      </header>

      {/* Mobile dropdown menu */}
      {showDropdown && (
        <div className="mobile-dropdown">
          <AdminSidebar isMobile={true} closeDropdown={() => setShowDropdown(false)} />
        </div>
      )}
    </>
  );
};

export default AdminHeader;
