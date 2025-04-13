import { GoHome } from "react-icons/go";
import "./adminheader.css";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { useNavigate } from "react-router";

const AdminHeader = () => {
    const nav = useNavigate()
  return (
    <header className="admin-dashboard-header">
      <div className="admin-dashboard-header-content">
        <div className="admin-dashboard-header-content-leftside">
        <img src="/images/CAMPUSTRADE-02 1.png" alt="" onClick={() => nav("/")} className="admin-ImageLogoDash" />
        </div>
        <div className="admin-dashboard-header-content-rightside">
            <div className="admin-dasboard-content-home" onClick={() => nav("/")}>
            <GoHome size={20} style={{color: "white"}}/>
                <p className="admin-content-p-tag">Home</p>
            </div>
            <div className="admin-dasboard-content-notification" onClick={() => nav("/notification")}>
            <MdOutlineNotificationsActive  size={20} style={{color: "white"}}/>
                <p className="admin-content-p-tag" >Notification</p>
            </div>
            <div className="admin-dasboard-content-img">
                <img src="/images/dasboadprofile.jpg" alt=""  className="admin-dash-profile-picture"/>
            </div>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
