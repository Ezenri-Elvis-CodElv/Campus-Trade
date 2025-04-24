// Sidebar.jsx
import { NavLink, useNavigate } from "react-router-dom";
import "./sidebar.css";
import { CgProfile } from "react-icons/cg";
import {
  IoCreateOutline,
  IoSettingsOutline,
  IoWarningOutline,
} from "react-icons/io5";
import { MdOutlinePendingActions, MdVerifiedUser } from "react-icons/md";
import { SiGoogleads } from "react-icons/si";
import { RiLogoutCircleLine } from "react-icons/ri";
import { BsFillFilePostFill } from "react-icons/bs";
import { useState } from "react";
import { Modal } from "antd";

const Sidebar = () => {
  const nav = useNavigate();
  const [modalVisible, setModalVisible] = useState(false);

  const getNavLinkClass = ({ isActive }) => (isActive ? "link active" : "link");

  const logout = () => {
    localStorage.clear();
    nav("/");
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-profileIcon">
        <CgProfile size={35} style={{ color: "purple" }} />
        <h3 className="myprofiletext">My Profile</h3>
      </div>
      <div className="pages-sidebar">
        <NavLink to="/dashboard" className={getNavLinkClass} end>
          Profile
        </NavLink>
        <NavLink to="/dashboard/getverified" className={getNavLinkClass}>
          <MdVerifiedUser size={14} />
          Get verified
        </NavLink>

        <NavLink to="/dashboard/createpost" className={getNavLinkClass} end>
          <IoCreateOutline size={14} />
          Create a post
        </NavLink>
      </div>
      <h3 className="myprofiletext">My Post</h3>
      <div className="pages-sidebar">
        <NavLink to="/dashboard/recentpost" className={getNavLinkClass}>
          <BsFillFilePostFill size={14} />
          Recent Posts
        </NavLink>

        <NavLink to="/dashboard/pendingpost" className={getNavLinkClass}>
          <MdOutlinePendingActions size={14} />
          Pending Posts
        </NavLink>

        <NavLink to="/dashboard/ads" className={getNavLinkClass}>
          <SiGoogleads size={14} />
          Ads
        </NavLink>
      </div>
      <div className="logout-button-setting">
        <NavLink
          to="/dashboard/accountinformation"
          className={({ isActive }) =>
            isActive ? "dash-setting active" : "dash-setting"
          }
        >
          <IoSettingsOutline size={20} />
          Settings
        </NavLink>
      </div>

      <div className="logout-button">
        <button onClick={() => setModalVisible(true)} className="dash-logout">
          <RiLogoutCircleLine size={18} />
          Log Out
        </button>
        <Modal
          open={modalVisible}
          onCancel={() => setModalVisible(false)}
          footer={null}
          centered
        >
          <div className="logout-container">
            <h2 className="logout-title">
              <IoWarningOutline className="logout-icon" />
              Are you sure you want to Logout!
            </h2>

            <div className="logout-buttons">
              <button
                className="cancel-btn"
                onClick={() => setModalVisible(false)}
              >
                Cancel
              </button>
              <button className="dash-logout" onClick={logout}>
                Logout
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </aside>
  );
};

export default Sidebar;
