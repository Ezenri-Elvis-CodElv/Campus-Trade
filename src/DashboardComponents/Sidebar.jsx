// Sidebar.jsx
import { NavLink } from 'react-router-dom';
import './sidebar.css';
import { CgProfile } from 'react-icons/cg';
import { IoCreateOutline, IoSettingsOutline } from 'react-icons/io5';
import { FaInfo } from 'react-icons/fa';
import { MdOutlineChangeCircle, MdOutlinePendingActions, MdVerifiedUser } from 'react-icons/md';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { SiGoogleads } from 'react-icons/si';
import { RiLogoutCircleLine } from 'react-icons/ri';
import { BsFillFilePostFill } from 'react-icons/bs';

const Sidebar = () => {
  
  const getNavLinkClass = ({ isActive }) => 
    isActive ? "link active" : "link";

  return (
    <aside className="sidebar">
      <div className='sidebar-profileIcon'>
        <CgProfile size={35} style={{ color: "purple" }} />
        <h3 className='myprofiletext'>My Profile</h3>
      </div>

      <div className='pages-sidebar'>
        <NavLink 
          to="/dashboard" 
          className={getNavLinkClass}
          end
        >
          Profile
        </NavLink>

        <NavLink 
          to="/dashboard/createpost" 
          className={getNavLinkClass}
          end
        >
          <IoCreateOutline size={14} />
          Create a post
        </NavLink>

        <NavLink 
          to="/dashboard/sellerprofile" 
          className={getNavLinkClass}
        >
          <MdVerifiedUser size={14} />
          Get verified
        </NavLink>
      </div>

      <h3 className='myprofiletext'>My Post</h3>
      <div className='pages-sidebar'>
        <NavLink 
          to="/dashboard/recentpost" 
          className={getNavLinkClass}
        >
          <BsFillFilePostFill size={14} />
          Recent Post
        </NavLink>

        <NavLink 
          to="/dashboard/pendingpost" 
          className={getNavLinkClass}
        >
          <MdOutlinePendingActions size={14} />
          Pending Post
        </NavLink>

        <NavLink 
          to="/dashboard/ads" 
          className={getNavLinkClass}
        >
          <SiGoogleads size={14} />
          Ads
        </NavLink>
      </div>

      <div className='logout-button-setting'>
        <NavLink 
          to="/dashboard/accountinformation" 
          className={({ isActive }) => 
            isActive ? "dash-setting active" : "dash-setting"
          }
        >
          <IoSettingsOutline size={20} />
          Setting
        </NavLink>
      </div>

      <div className='logout-button'>
        <NavLink to="/dasboard/logout" className='dash-logout' >
      
          <RiLogoutCircleLine size={18} />
          LogOut
        
        </NavLink>
       
      </div>
    </aside>
  );
};

export default Sidebar;