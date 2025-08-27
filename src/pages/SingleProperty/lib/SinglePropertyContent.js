import Collapseantd from '../../../components/CollapseFeaturesInfo/Collapseantd';
import { Link } from 'react-router'
import property_details_img1 from '../../../assets/images/property_detalis/single-property.jpg'
import {featuresData} from "../../../helper/FakeData";
import FeaturesAraay from '../../../components/features/InfoFeatures';

const SinglePropertyContent = () => {
  return (
    <div>
      
        <div className='details'>
            <div className='details_content'>

                <div className='deatails1'>
                    <img className='detailesimage' src={property_details_img1}/>
                    <div className='details_info'>
                        <span className='detailscatagory'>Apparment</span>
                        <Link className='singleproperty_link'>Book Now</Link>
                        <h4>24 New Street Miami, OR 24560</h4>
                        <p>Get <strong>the best villa agency</strong> in the world. Please tell your friends about it. 
                            Thank you. Cloud bread kogi bitters pitchfork shoreditch tumblr yr succulents single-origin coffee 
                            schlitz enamel pin you probably haven't heard of them ugh hella.
                            <br/>
                            <br/>
                            When you look for free CSS templates, you can simply type TemplateMo in any search engine website. 
                            In addition, you can type TemplateMo Digital Marketing, TemplateMo Corporate Layouts, etc. Master 
                            cleanse +1 intelligentsia swag post-ironic, slow-carb chambray knausgaard PBR&B DSA poutine neutra 
                            cardigan hoodie pop-up.</p>
                    </div>
                    <div className='details_collapse'>
                        <Collapseantd/>
                    </div>
                </div>

                <div className='propertydetailslist'>
                <div className='features_table'>  
                    <FeaturesAraay data={featuresData}/>
                </div>
            </div>

            </div>
        </div>

    </div>
  )
}

export default SinglePropertyContent
