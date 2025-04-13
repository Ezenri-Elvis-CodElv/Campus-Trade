import { NavLink, useNavigate } from "react-router-dom";
import "./adminsidebar.css";
import { MdOutlinePendingActions, MdOutlineVerified, MdVerifiedUser } from "react-icons/md";
import { SiGoogleads } from "react-icons/si";
import { RiDeleteBin6Line, RiLogoutCircleLine } from "react-icons/ri";
import { BsFillFilePostFill } from "react-icons/bs";
import { IoInformationSharp } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
import { BiLogOut } from "react-icons/bi";

const AdminSidebar = () => {
  const nav = useNavigate();
  return (
    <>
      <aside className="adminsidebar">
        <div className="admin-pages-sidebar">
          <NavLink to="/admindashboard" end className="admin-link">
            {" "}
            <ImProfile />  Profile
          </NavLink>

          <NavLink to="/admindashboard/approveinfo" className="admin-link">
          <IoInformationSharp />  Approve Information
          </NavLink>
          <NavLink to="/admindashboard/verifyuser" className="admin-link">
          <MdOutlineVerified />  Verify Users
          </NavLink>
          <NavLink to="/admindashboard/deleteuser" className="admin-link">
          <RiDeleteBin6Line /> Delete User
          </NavLink>
        </div>
        <hr className="admin-sidebar-profileIcon" />
        <h3 className="admin-myprofiletext">My Post</h3>
        <div className="pages-sidebar">
          <NavLink to="/admindashboard/approveuserpost" className="admin-link">
            {" "}
            <BsFillFilePostFill size={14} />
            Approve User Post
          </NavLink>
          <NavLink to="/admindashboard/adminpendingpost" className="admin-link">
            <MdOutlinePendingActions size={14} /> Pending Post
          </NavLink>
          <NavLink to="/admindashboard/acceptuserpayment" className="admin-link">
            <SiGoogleads size={14} /> Accept User Payment
          </NavLink>
        </div>
        <hr  className="admin-sidebar-profileIcon"/>
        <div className="admin-logout-button">
          <button className="admin-dash-logout" onClick={() => nav("/")}>
          <BiLogOut /> LogOut
          </button>
        </div>
      </aside>
    </>
  );
};

export default AdminSidebar;
