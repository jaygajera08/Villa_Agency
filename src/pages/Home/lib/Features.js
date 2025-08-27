import featuresimg from '../../../assets/images/features/featured.jpg';
import featureslogo from '../../../icons/featured-icon.png';
import Collapseantd from '../../../components/CollapseFeaturesInfo/Collapseantd';
import { featuresData } from "../../../helper/FakeData";
import FeaturesAraay from '../../../components/features/InfoFeatures';
import { FeaturesWrapper } from './FeaturesStyled'; 


const Features = () => {
  return (
    <div>
      <FeaturesWrapper>
        <div className="features-container">
          <div className="features-image-wrapper">
            <img src={featuresimg} alt="Features" />
            <a href='#'>
              <img src={featureslogo} alt="Featured Icon" />
            </a>
          </div>
          <div className="features-info">
            <div className="heading">
              <h6>| Features</h6>
              <h2>Best Appartment & Sea view</h2>
              <Collapseantd />
            </div>
          </div>
          <div className="features-list">
            <div className="features-table">
              <FeaturesAraay data={featuresData} />
            </div>
          </div>
        </div>
      </FeaturesWrapper>
    </div>
  );
};

export default Features;











// import featuresimg from '../../../assets/images/features/featured.jpg';
// import featureslogo from '../../../icons/featured-icon.png';
// import Collapseantd from '../../../components/Collapseantd';
// import infoicon1 from '../../../icons/info-icon-01.png';
// import infoicon2 from '../../../icons/info-icon-02.png';
// import infoicon3 from '../../../icons/info-icon-03.png';
// import infoicon4 from '../../../icons/info-icon-04.png';

// const Features = () => {
//   return (
//     <div>
      
//     <div className='features'>
//         <div className='features_container'>

//             <div className='features_image'>
//                 <img src={featuresimg}/>
//                 <a href='#'>
//                     <img src={featureslogo}/>
//                 </a>
//             </div>

//             <div className='features_info'>
//                 <div className='heading'>
//                     <h6>| Features</h6>
//                     <h2>Best Appartment & Sea view</h2>
//                     <Collapseantd/>
//                 </div>
//             </div>

//             <div className='features_list'>
//                 <div className='features_table'>
//                     <div className='info'>
//                         <img src={infoicon1}/>
//                         <div className='information'>
//                             <h2>250 m2</h2>
//                             <p>Total Flat Space</p>
//                         </div>
//                     </div>
//                     <div className='info'>
//                         <img src={infoicon2}/>
//                         <div className='information'>
//                             <h2>Contract</h2>
//                             <p>Contract Ready</p>
//                         </div>
//                     </div>
//                     <div className='info'>
//                         <img src={infoicon3}/>
//                         <div className='information'>
//                             <h2>Payment</h2>
//                             <p>Payment Process</p>
//                         </div>
//                     </div>
//                     <div className='info'>
//                         <img src={infoicon4}/>
//                         <div className='information'>
//                             <h2>Safety</h2>
//                             <p>24/7 Under Control</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     </div>

//     </div>
//   )
// }

// export default Features


// https://templatemo.com/live/templatemo_591_villa_agency