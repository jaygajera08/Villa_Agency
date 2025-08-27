import Box from "../../../components/PropertyInfoBox/Box";
import {propertiesData} from "../../../helper/FakeData";
import { PropertiesHome } from "./IndexStyle";

const Home = () => {
  return (
    <div>

      <PropertiesHome>
        <div className='properties_title_home'>
          <h6>| Properties</h6>
          <h2>We Provide The Best Property You Like</h2> 
        </div>
        <Box data={propertiesData}/> 
      </PropertiesHome>
        
    </div> 
  );
};

export default Home;   
