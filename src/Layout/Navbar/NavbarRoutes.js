import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMap, faCircleUser, faPhone, faRightToBracket, faArrowUp, faBars } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link, NavLink, Outlet } from 'react-router'
import { useEffect, useState } from 'react';
import Sidebar from '../Navbar/Sidebar'
import '../Navbar/header.scss'

const NavbarRoutes = () => {

    const [isSticky, setIsSticky] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 0) {
            setIsSticky(true);
          } else {
            setIsSticky(false);
          }

           if (window.pageYOffset > 50) {
            setShowButton(true);
           } else {
            setShowButton(false);
           }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

      const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling animation
    });
  };

  return (
    <div>

      <div className='sub_header'>
        <div className='subheader-container'>
            <div className='information'>
                <ul className='info'>
                    <li>
                        <i><FontAwesomeIcon icon={faEnvelope} /></i>
                        Techguru89@gmail.com
                    </li>
                    <li>
                        <i><FontAwesomeIcon icon={faMap} /></i>
                        07,Central plaza,Collage road,Ahmedabad
                    </li>
                </ul>
            </div>

            <div className='links'>
                <ul className='links_info'>
                    <li>
                        <i><FontAwesomeIcon icon={faCircleUser}  /></i>
                    </li>
                    <li>
                        <i><FontAwesomeIcon icon={faFacebook} /></i>
                    </li>
                    <li>
                        <i><FontAwesomeIcon icon={faInstagram} /></i>
                    </li>
                    <li>
                        <i><FontAwesomeIcon icon={faRightToBracket} /></i>
                    </li>
                </ul>
            </div>
        </div>
      </div>

      <div className={isSticky ? 'header-sticky' : 'main_header'}> 
        <div className='main_container'>
            <div className='logo'>
                <a href='#'><h1>VILLA</h1></a>
            </div>

            <div className='navbar'>
                <ul className='nav'>
                    <li>
                        <NavLink to='/home' className={({ isActive }) => isActive ? 'active-link' : undefined}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/property' className={({ isActive }) => isActive ? 'active-link' : undefined}>Properties</NavLink>
                    </li>
                    <li>
                        <NavLink to='/details' className={({ isActive }) => isActive ? 'active-link' : undefined}>Property Details</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' className={({ isActive }) => isActive ? 'active-link' : undefined}>Contact Us</NavLink>
                    </li>
                    <li>
                        <NavLink className='nav_link' to='/contact'><i><FontAwesomeIcon icon={faPhone} /></i>Schedule Visit</NavLink> 
                    </li>
                </ul>
                <div className="navbar-toggle" onClick={toggleSidebar}>
                    {/* Hamburger Icon */}
                    <div className="bar"><FontAwesomeIcon icon={faBars} /></div>
                </div>
                {/* Conditionally render sidebar */}
                    {sidebarOpen && <Sidebar toggleSidebar={toggleSidebar} />}
            </div>
        </div>
      </div>
    <Outlet/>

    { showButton && (<button className='scrolltopBtn' onClick={scrollToTop}><FontAwesomeIcon icon={faArrowUp} /></button>) }  

    </div>
  )
}

export default NavbarRoutes;