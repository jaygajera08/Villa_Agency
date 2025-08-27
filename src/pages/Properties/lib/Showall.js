import Box from "../../../components/PropertyInfoBox/Box";
import {propertiesData} from "../../../helper/FakeData";

const Showall = () => { 
  return (
    <div>

        <Box data={propertiesData}/> 
        
    </div>
  )
}

export default Showall

























{/* <div className='properties'>
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
                        <img src={property_img4}/>
                    </a>
                    <span className='catagory'>Apartment</span>
                    <h6>$584.500</h6>
                    <h4>12 Hope Street Portland, OR 12650</h4>
                    <ul>
                        <li>Bedrooms : <span>4</span></li>
                        <li>Bethrooms : <span>3</span></li>
                        <li>Area : <span>125m2</span></li>
                        <li>Floor : <span>25th</span></li>
                        <li>Parking : <span>2 Cars</span></li>
                    </ul>
                    <div className='sch_btn'>
                        <a href='#'>Schedule Plan</a>
                    </div>
                </div>

                <div className='properti_box'>
                    <a href='#'>
                        <img src={property_img5}/>
                    </a>
                    <span className='catagory'>Penthouse</span>
                    <h6>$925.600</h6>
                    <h4>34 Hope Street Portland, OR 42680</h4>
                    <ul>
                        <li>Bedrooms : <span>4</span></li>
                        <li>Bethrooms : <span>4</span></li>
                        <li>Area : <span>180m2</span></li>
                        <li>Floor : <span>38th</span></li>
                        <li>Parking : <span>8 spots</span></li>
                    </ul>
                    <div className='sch_btn'>
                        <a href='#'>Schedule Plan</a>
                    </div>
                </div>

                <div className='properti_box'>
                    <a href='#'>
                        <img src={property_img6}/>
                    </a>
                    <span className='catagory'>Modern Condo</span>
                    <h6>$450.000</h6>
                    <h4>22 Hope Street Portland, OR 16540</h4>
                    <ul>
                        <li>Bedrooms : <span>3</span></li>
                        <li>Bethrooms : <span>2</span></li>
                        <li>Area : <span>165m2</span></li>
                        <li>Floor : <span>26th</span></li>
                        <li>Parking : <span>3 Cars</span></li>
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
                        <img src={property_img4}/>
                    </a>
                    <span className='catagory'>Apartment</span>
                    <h6>$584.500</h6>
                    <h4>12 Hope Street Portland, OR 12650</h4>
                    <ul>
                        <li>Bedrooms : <span>4</span></li>
                        <li>Bethrooms : <span>3</span></li>
                        <li>Area : <span>125m2</span></li>
                        <li>Floor : <span>25th</span></li>
                        <li>Parking : <span>2 Cars</span></li>
                    </ul>
                    <div className='sch_btn'>
                        <a href='#'>Schedule Plan</a>
                    </div>
                </div>

                <div className='properti_box'>
                    <a href='#'>
                        <img src={property_img5}/>
                    </a>
                    <span className='catagory'>Penthouse</span>
                    <h6>$925.600</h6>
                    <h4>34 Hope Street Portland, OR 42680</h4>
                    <ul>
                        <li>Bedrooms : <span>4</span></li>
                        <li>Bethrooms : <span>4</span></li>
                        <li>Area : <span>180m2</span></li>
                        <li>Floor : <span>38th</span></li>
                        <li>Parking : <span>8 spots</span></li>
                    </ul>
                    <div className='sch_btn'>
                        <a href='#'>Schedule Plan</a>
                    </div>
                </div>

                <div className='properti_box'>
                    <a href='#'>
                        <img src={property_img6}/>
                    </a>
                    <span className='catagory'>Modern Condo</span>
                    <h6>$450.000</h6>
                    <h4>22 Hope Street Portland, OR 16540</h4>
                    <ul>
                        <li>Bedrooms : <span>3</span></li>
                        <li>Bethrooms : <span>2</span></li>
                        <li>Area : <span>165m2</span></li>
                        <li>Floor : <span>26th</span></li>
                        <li>Parking : <span>3 Cars</span></li>
                    </ul>
                    <div className='sch_btn'>
                        <a href='#'>Schedule Plan</a>
                    </div>
                </div>

            </div>
        </div> */}
