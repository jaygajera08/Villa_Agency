import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router';
import '../Navbar/header.scss';

const Sidebar = ({ toggleSidebar }) => { 


  return (
    <div className="sidebar-container">
      <div className="sidebar-backdrop" onClick={toggleSidebar}></div>
      <div className="sidebar-menu">
        <button className="close-sidebar-button" onClick={toggleSidebar}>X</button>
            <ul className='side-nav'>
                    <li>
                        <NavLink to='/home' onClick={toggleSidebar} className={({ isActive }) => isActive ? 'active_link' : undefined}>Home</NavLink> 
                    </li>
                    <li>
                        <NavLink to='/property' onClick={toggleSidebar} className={({ isActive }) => isActive ? 'active_link' : undefined}>Properties</NavLink>
                    </li>
                    <li>
                        <NavLink to='/details' onClick={toggleSidebar} className={({ isActive }) => isActive ? 'active_link' : undefined}>Property Details</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' onClick={toggleSidebar} className={({ isActive }) => isActive ? 'active_link' : undefined}>Contact Us</NavLink>
                    </li>
                    <li>
                        <NavLink onClick={toggleSidebar}>Log Out</NavLink>
                    </li>
                    <li>
                        <NavLink className='nav_link' to='/contact' onClick={toggleSidebar}><i><FontAwesomeIcon icon={faPhone} /></i>Schedule Visit</NavLink> 
                    </li>
                </ul>
      </div>
    </div>
  );
};

export default Sidebar;