import { NavLink, useNavigate } from "react-router-dom";
import "./adminsidebar.css";
import {
  MdOutlinePendingActions,
  MdOutlineVerified,
} from "react-icons/md";
import { SiGoogleads } from "react-icons/si";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsFillFilePostFill } from "react-icons/bs";
import { IoInformationSharp } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
import { BiLogOut } from "react-icons/bi";

const AdminSidebarDropdown = ({ onClose }) => {
  const nav = useNavigate();
  const handleLogout = () => {
    onClose();
    nav("/");
  };

  return (
    <div className="admin-mobile-dropdown">
      <NavLink to="/admindashboard" className="admin-link" onClick={onClose}>
        <ImProfile /> Profile
      </NavLink>
      <NavLink to="/admindashboard/approveinfo" className="admin-link" onClick={onClose}>
        <IoInformationSharp /> Approve Information
      </NavLink>
      <NavLink to="/admindashboard/verifyuser" className="admin-link" onClick={onClose}>
        <MdOutlineVerified /> Verify Users
      </NavLink>
      <NavLink to="/admindashboard/deleteuser" className="admin-link" onClick={onClose}>
        <RiDeleteBin6Line /> Delete User
      </NavLink>
      <NavLink to="/admindashboard/approveuserpost" className="admin-link" onClick={onClose}>
        <BsFillFilePostFill size={14} /> Approve User Post
      </NavLink>
      <NavLink to="/admindashboard/adminpendingpost" className="admin-link" onClick={onClose}>
        <MdOutlinePendingActions size={14} /> Pending Post
      </NavLink>
      <NavLink to="/admindashboard/acceptuserpayment" className="admin-link" onClick={onClose}>
        <SiGoogleads size={14} /> Accept User Payment
      </NavLink>
      <button className="admin-dash-logout" onClick={handleLogout}>
        <BiLogOut /> Logout
      </button>
    </div>
  );
};

export default AdminSidebarDropdown;
