import singleimg from '../../../assets/images/best_deal/deal-04.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons'; 
import { Link } from 'react-router';
import {DetailsPenthouseData} from "../../../helper/FakeData";


const DetailsPenthouse = () => {
  return (
    <div className='detailsapartment_content'> 
       
        <div className='singledetailslist'>
                <div className='single_table'>
                    {DetailsPenthouseData.map((details) => (
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
            <h4>Extra Info About Penthouse</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod tempor pack incididunt 
                ut Kinfolk tonx seitan crucifix 3 wolf moon bicycle rights keffiyeh snackwave wolf same vice, chillwave 
                vexillologistlabore et dolore magna aliqua quised ipsum suspendisse.
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

export default DetailsPenthouse
