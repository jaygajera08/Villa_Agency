import { lazy, Suspense } from 'react';

const Features = lazy(() => import('./lib/Features'));
const Video = lazy(() => import('./lib/Video'));
const Facts = lazy(() => import('./lib/Facts'));
const Footer = lazy(() => import('../../Layout/Footer/Footer'));
const Contacthome = lazy(() => import('./lib/Contacthome'));
const Coursalantd = lazy(() => import('./lib/Coursalantd'));
const PropertydetailsHome = lazy(() => import('./lib/PropertydetailsHome'));
const PropertyHome = lazy(() => import('./lib/PropertiesHome'));

const Home = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Coursalantd />
        <Features />
        <Video />
        <Facts />
        <PropertydetailsHome />
        <PropertyHome />
        <Contacthome />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Home;



// import Features from '../../components/Home_components/Features';
// import Video from '../../components/Home_components/Video';
// import Facts from '../../components/Home_components/Facts';
// import Footer from '../../components/Footer';
// import Contacthome from '../../components/Home_components/Contacthome';
// import Coursalantd from '../../components/Home_components/Coursalantd';
// import PropertydetailsHome from '../../components/Home_components/PropertydetailsHome';
// import PropertyHome from '../../components/Home_components/PropertiesHome';

// const Home = () => {
//   return (
//     <div>

//       <Coursalantd/>
//       <Features/>
//       <Video/>
//       <Facts/>
//       <PropertydetailsHome/>
//       <PropertyHome/>
//       <Contacthome/>
//       <Footer/>

//     </div>
//   )
// }

// export default Home