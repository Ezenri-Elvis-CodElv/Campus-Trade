import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import { CgProfile } from 'react-icons/cg';
import { IoCreateOutline } from 'react-icons/io5';
import { FaInfo } from 'react-icons/fa';
import { MdOutlineChangeCircle, MdOutlinePendingActions, MdVerifiedUser } from 'react-icons/md';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { SiGoogleads } from 'react-icons/si';
import { RiLogoutCircleLine } from 'react-icons/ri';

const Sidebar = () => {
  return (
    <>
    <aside className="sidebar">
      <div className='sidebar-profileIcon'>
      <CgProfile size={35} style={{color: "purple"}}/>
        <h3 className='myprofiletext'>My Profile</h3>
       
      </div>
      
     <div className='pages-sidebar'>
     <NavLink to="/dashboard" end className="link"> <IoCreateOutline size={25}/>Create a post</NavLink>
      <NavLink to="/dashboard/accountinformation" className="link"><FaInfo size={25} />Account Information</NavLink>
      <NavLink to="/dashboard/changephonenumber" className="link"><IoCreateOutline size={25}/>Change Number</NavLink>
      <NavLink to="/dashboard/changepassword" className="link"><MdOutlineChangeCircle size={25} />Change Password</NavLink>
      <NavLink to="/dashboard/getverified" className="link"><MdVerifiedUser size={25} />Get verified</NavLink>
     </div>
     <hr style={{width: "100%", border: "1px solid grey"}} />
        <h3 className='myprofiletext'>My Post</h3>
        <div className='pages-sidebar'>
     <NavLink to="/dashboard/recentpost"  className="link"> Recent Post</NavLink>
      <NavLink to="/dashboard/pendingpost" className="link"><MdOutlinePendingActions size={25} /> Pending Post</NavLink>
      <NavLink to="/dashboard/posts" className="link"><IoIosCheckmarkCircleOutline /> Posted</NavLink>
      <NavLink to="/dashboard/ads" className="link"><SiGoogleads /> Ads</NavLink>
     </div>
     <div>
     <NavLink to="/dashboard/logout" className="link" style={{color: "red"}}><RiLogoutCircleLine /> LogOut</NavLink>

     </div>
    </aside>
    </>
  );
};

export default Sidebar;
