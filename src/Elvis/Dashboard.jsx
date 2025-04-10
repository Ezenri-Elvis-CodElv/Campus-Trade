import { Outlet } from 'react-router-dom';
import './dashboard.css'; 
import DashboardHeader from '../DashboardComponents\'/DAshboardHeader';
import Sidebar from '../DashboardComponents\'/Sidebar';

const DashboardLayout = () => {
  return (
    <div className="dashboard-wrapper">
      <DashboardHeader />
      <div className="dashboard-body">
        <Sidebar />
        <main className="dashboard-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
