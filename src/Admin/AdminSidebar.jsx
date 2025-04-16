import { NavLink, useNavigate } from "react-router-dom";
import "./adminsidebar.css";
import { MdOutlinePendingActions, MdOutlineVerified, MdVerifiedUser } from "react-icons/md";
import { SiGoogleads } from "react-icons/si";
import { RiDeleteBin6Line, RiLogoutCircleLine } from "react-icons/ri";
import { BsFillFilePostFill } from "react-icons/bs";
import { IoInformationSharp } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
import { BiLogOut } from "react-icons/bi";

const AdminSidebar = ({ isMobile, closeDropdown }) => {
  const nav = useNavigate();

  const handleNavigation = (path) => {
    nav(path);
    if (isMobile) closeDropdown();
  };

  return (
    <aside className={isMobile ? "adminsidebar-mobile" : "adminsidebar"}>
      <div className="admin-pages-sidebar">
        <div onClick={() => handleNavigation("/admindashboard")} className="admin-link"><ImProfile /> Profile</div>
        <div onClick={() => handleNavigation("/admindashboard/approveinfo")} className="admin-link"><IoInformationSharp /> Approve Info</div>
        <div onClick={() => handleNavigation("/admindashboard/verifyuser")} className="admin-link"><MdOutlineVerified /> Verify Users</div>
        <div onClick={() => handleNavigation("/admindashboard/deleteuser")} className="admin-link"><RiDeleteBin6Line /> Delete User</div>
      </div>

      <hr className="admin-sidebar-profileIcon" />
      <h3 className="admin-myprofiletext">My Post</h3>

      <div className="pages-sidebar">
        <div onClick={() => handleNavigation("/admindashboard/approveuserpost")} className="admin-link"><BsFillFilePostFill size={14} /> Approve User Post</div>
        <div onClick={() => handleNavigation("/admindashboard/adminpendingpost")} className="admin-link"><MdOutlinePendingActions size={14} /> Pending Post</div>
        <div onClick={() => handleNavigation("/admindashboard/acceptuserpayment")} className="admin-link"><SiGoogleads size={14} /> Accept Payment</div>
      </div>

      <hr className="admin-sidebar-profileIcon" />
      <div className="admin-logout-button">
        <button className="admin-dash-logout" onClick={() => handleNavigation("/")}>
          <BiLogOut /> LogOut
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
