import singleimg from '../../../assets/images/best_deal/deal-01.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons'; 
import { Link } from 'react-router';
import {PropertyDetailApartmentData} from "../../../helper/FakeData";
import './detailsproperty.scss';

const DetailsApartment = () => {
  return (
    <div className='detailsapartment_content'>
      
        <div className='singledetailslist'> 
                <div className='single_table'>
                    {PropertyDetailApartmentData.map((details) => (
                    <div className='single_info'>
                    <div className='single_information' key={details.id}>
                        <p>{details.Desc}</p>
                        <h2>{details.info}</h2>
                    </div>
                </div>
            ))}
                </div>
        </div>

        <div className='single_img'>
            <img src={singleimg}/>
        </div>

        <div className='single_summary'>
            <h4>All Info About Apartment</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor 
                pack incididunt ut labore et dolore magna aliqua quised ipsum suspendisse.
                <br/>
                <br/>
                Swag fanny pack lyft blog twee. JOMO ethical copper mug, succulents typewriter shaman DIY kitsch twee 
                taiyaki fixie hella venmo after messenger poutine next level humblebrag swag franzen.</p>
            <div className='single_btn'>
                <Link className='details_link' to='/contact'><i><FontAwesomeIcon icon={faPhone} /></i>Schedule Visit</Link>
            </div>
        </div>

    </div>
  )
}

export default DetailsApartment
