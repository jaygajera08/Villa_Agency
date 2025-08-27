import { NavLink, Outlet } from 'react-router'

const PropertyNav = () => {
  return (
    <div>
      
        <div className='properti_nav'>
            <div className='nav_item'>
                <ul>
                    <li><NavLink className={({ isActive }) => isActive ? 'active_nav' : 'nav_link'} to='' end >Show All</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? 'active_nav' : 'nav_link'} to='apartment'>Apartment</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? 'active_nav' : 'nav_link'} to='villa'>Villa House</NavLink></li>
                    <li><NavLink className={({ isActive }) => isActive ? 'active_nav' : 'nav_link'} to='penthouse'>Penthouse</NavLink></li>
                </ul>
            </div>
        </div>

        <Outlet/>

    </div>
  )
}

export default PropertyNav;
