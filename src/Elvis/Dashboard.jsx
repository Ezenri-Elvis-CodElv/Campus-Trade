import { Outlet } from "react-router-dom";
import "./dashboard.css";
import DashboardHeader from "../DashboardComponents/DashboardHeader";
import Sidebar from "../DashboardComponents/Sidebar";




const DashboardLayout = () => {
  return (
    <div className="dashboard-wrapper">
      <DashboardHeader />
      <div className="dashboard-body">
        <div className="sidebar-desktop">
          <Sidebar />
        </div>
        <main className="dashboard-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
