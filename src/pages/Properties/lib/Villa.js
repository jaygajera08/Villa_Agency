import property_img1 from '../../../assets/images/properties/property-01.jpg'
import property_img2 from '../../../assets/images/properties/property-02.jpg'
import property_img3 from '../../../assets/images/properties/property-03.jpg'

const Villa = () => {
  return (
    <div>

        <div className='properties'>
            <div className='properties_main'>

                <div className='properti_box'>
                    <a href='#'>
                        <img src={property_img1}/>
                    </a>
                    <span className='catagory'>Luxury Villa</span>
                    <h6>$2.264.000</h6>
                    <h4>18 Old Street Miami, OR 97219</h4>
                    <ul>
                        <li>Bedrooms : <span>8</span></li>
                        <li>Bethrooms : <span>8</span></li>
                        <li>Area : <span>545m2</span></li>
                        <li>Floor : <span>3</span></li>
                        <li>Parking : <span>6 spots</span></li>
                    </ul>
                    <div className='sch_btn'>
                        <a href='#'>Schedule Plan</a>
                    </div>
                </div>

                <div className='properti_box'>
                    <a href='#'>
                        <img src={property_img2}/>
                    </a>
                    <span className='catagory'>Luxury Villa</span>
                    <h6>$1.180.000</h6>
                    <h4>54 New Street Florida, OR 27001</h4>
                    <ul>
                        <li>Bedrooms : <span>6</span></li>
                        <li>Bethrooms : <span>5</span></li>
                        <li>Area : <span>450m2</span></li>
                        <li>Floor : <span>3</span></li>
                        <li>Parking : <span>8 spots</span></li>
                    </ul>
                    <div className='sch_btn'>
                        <a href='#'>Schedule Plan</a>
                    </div>
                </div>

                <div className='properti_box'>
                    <a href='#'>
                        <img src={property_img3}/>
                    </a>
                    <span className='catagory'>Luxury Villa</span>
                    <h6>$1.460.000</h6>
                    <h4>26 Mid Street Portland, OR 38540</h4>
                    <ul>
                        <li>Bedrooms : <span>5</span></li>
                        <li>Bethrooms : <span>4</span></li>
                        <li>Area : <span>225m2</span></li>
                        <li>Floor : <span>3</span></li>
                        <li>Parking : <span>10 spots</span></li>
                    </ul>
                    <div className='sch_btn'>
                        <a href='#'>Schedule Plan</a>
                    </div>
                </div>

                <div className='properti_box'>
                    <a href='#'>
                        <img src={property_img1}/>
                    </a>
                    <span className='catagory'>Luxury Villa</span>
                    <h6>$2.264.000</h6>
                    <h4>18 Old Street Miami, OR 97219</h4>
                    <ul>
                        <li>Bedrooms : <span>8</span></li>
                        <li>Bethrooms : <span>8</span></li>
                        <li>Area : <span>545m2</span></li>
                        <li>Floor : <span>3</span></li>
                        <li>Parking : <span>6 spots</span></li>
                    </ul>
                    <div className='sch_btn'>
                        <a href='#'>Schedule Plan</a>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Villa
