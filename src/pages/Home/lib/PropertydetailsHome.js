import { NavLink, Outlet } from 'react-router'
import '../../SingleProperty/lib/index.scss'
// import '../../SingleProperty/lib/detailsproperty.scss'

const PropertydetailsHome = () => {
  return (
    <div>
      
        <div className='propertdetails_title'>
            <div className='deal_content'>
                <div className='deal_title'>
                    <h6>| Best Deal</h6>
                    <h2>Find Your Best Deal Right Now!</h2>
                </div>

                <div className='deal_info'>
                    <ul className='deal_list'> 
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'active_deal' : 'deal_link'} to='' end>Apartment</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'active_deal' : 'deal_link'} to='homedetailsvilla'>Villa House</NavLink>
                        </li>
                        <li>
                            <NavLink className={({ isActive }) => isActive ? 'active_deal' : 'deal_link'} to='homedetailspenthouse'>Penthouse</NavLink>
                        </li>
                    </ul>
                </div>

                <Outlet/>
            </div>       
        </div>

    </div>
  )
}

export default PropertydetailsHome
