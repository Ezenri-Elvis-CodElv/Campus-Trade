import { NavLink, useNavigate } from "react-router-dom";
import { IoSettingsOutline } from "react-icons/io5";
import { RiLogoutCircleLine } from "react-icons/ri";
import { MdOutlinePendingActions } from "react-icons/md";
import { SiGoogleads } from "react-icons/si";
import { MdVerifiedUser } from "react-icons/md";
import { BsFillFilePostFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { IoCreateOutline } from "react-icons/io5";

const SidebarLinks = ({ closeMenu }) => {
  const nav = useNavigate();

  return (
    <div className="sidebar-links-mobile">
      <h3 className="mobile-heading">My Profile</h3>
      <NavLink to="/dashboard" onClick={closeMenu} className="link">
        {" "}
        <CgProfile size={16} /> Profile
      </NavLink>
      <NavLink to="/dashboard/createpost" onClick={closeMenu} className="link">
        {" "}
        <IoCreateOutline size={16} /> Create a post
      </NavLink>
      <NavLink to="/dashboard/getverified" onClick={closeMenu} className="link">
        {" "}
        <MdVerifiedUser size={16} /> Get Verified
      </NavLink>

      <h3 className="mobile-heading">My Posts</h3>
      <NavLink to="/dashboard/recentpost" onClick={closeMenu} className="link">
        {" "}
        <BsFillFilePostFill size={16} /> Recent Post
      </NavLink>
      <NavLink to="/dashboard/pendingpost" onClick={closeMenu} className="link">
        {" "}
        <MdOutlinePendingActions size={16} /> Pending Post
      </NavLink>
      <NavLink to="/dashboard/ads" onClick={closeMenu} className="link">
        {" "}
        <SiGoogleads size={16} /> Ads
      </NavLink>

      <NavLink
        to="/dashboard/accountinformation"
        onClick={closeMenu}
        className="link"
      >
        {" "}
        <IoSettingsOutline size={16} /> Settings
      </NavLink>
      <button
        className="link"
        onClick={() => {
          nav("/");
          closeMenu();
        }}
      >
        {" "}
        <RiLogoutCircleLine size={16} /> Logout
      </button>
    </div>
  );
};

export default SidebarLinks;
