import { GoHome } from "react-icons/go";
import "./dashboardheader.css";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { useNavigate } from "react-router";

const DashboardHeader = () => {
    const nav = useNavigate()
  return (
    <header className="dashboard-header">
      <div className="dashboard-header-content">
        <div className="dashboard-header-content-leftside">
        <img src="src/assets/Public/CAMPUSTRADE-02 1.png" alt="" onClick={() => nav("/")} className="ImageLogoDash" />
        </div>
        <div className="dashboard-header-content-rightside">
            <div className="dasboard-content-home" onClick={() => nav("/")}>
            <GoHome size={20} style={{color: "orange"}}/>
                <p className="content-p-tag">Home</p>
            </div>
            <div className="dasboard-content-notification" onClick={() => nav("/notification")}>
            <MdOutlineNotificationsActive  size={20} style={{color: "purple"}}/>
                <p className="content-p-tag" >Notification</p>
            </div>
            <div className="dasboard-content-img">
                <img src="src/assets/Public/dasboadprofile.jpg" alt=""  className="dash-profile-picture"/>
            </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
