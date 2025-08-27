import Footer from '../../Layout/Footer/Footer';
import SinglePropertyTitle from '../../pages/SingleProperty/lib/SinglePropertyTitle';
import SinglePropertyContent from '../../pages/SingleProperty/lib/SinglePropertyContent';
import SinglePropertyNav from '../../pages/SingleProperty/lib/SinglePropertyNav';
import './lib/index.scss'

const Properydetail = () => { 
  return (
    <div>

        <SinglePropertyTitle/>

        <SinglePropertyContent/>

        <SinglePropertyNav/>

        <Footer/>
    </div>
  )
}

export default Properydetail
