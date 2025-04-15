import { Outlet } from 'react-router-dom';
import './admindashboard.css'; 
import AdminHeader from './AdminHeader';
import AdminSidebar from './AdminSidebar';

const AdminDashboard = () => {
  return (
    <div className="dashboard-wrapper">
      <AdminHeader />
      <div className="dashboard-body">
        <AdminSidebar />
        <main className="dashboard-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
