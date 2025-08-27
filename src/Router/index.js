import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import NavbarRoutes from "../Layout/Navbar/NavbarRoutes";
// import ProtectedRoute from "../Layout/Navbar/ProtectedRoute";
import Spin from "../components/LoadingSpinner/Spin";


const Home = lazy(() => import("../pages/Home/Home"));
const Contact = lazy(() => import("../pages/Contact/Contact"));
const Properties = lazy(() => import("../pages/Properties/Properties"));
const PropertyDetail = lazy(() => import("../pages/SingleProperty/Properydetail"));
const Showall = lazy(() => import("../pages/Properties/lib/Showall"));
const Apartment = lazy(() => import("../pages/Properties/lib/Apartment"));
const Villa = lazy(() => import("../pages/Properties/lib/Villa"));
const Penthouse = lazy(() => import("../pages/Properties/lib/Penthouse"));
const DetailsApartment = lazy(() => import("../pages/SingleProperty/lib/DetailsApartment"));
const DetailsVilla = lazy(() => import("../pages/SingleProperty/lib/DetailsVilla"));
const DetailsPenthouse = lazy(() => import("../pages/SingleProperty/lib/DetailsPenthouse"));

const PageRouter = () => {
  return (
    <Routes>
      {/* first render login page :-  */}
      <Route path="/" element={<Suspense fallback={<Spin size={60} />}><NavbarRoutes /></Suspense>}/>

      {/* Navbar route is set to all pages :- */}
      <Route element={<NavbarRoutes />}>
        
        {/* home page property detail information routes :-  */}
        <Route path="/home" element={<Suspense fallback={<Spin size={60} />}><Home /></Suspense>}>
          <Route index element={<Suspense fallback={<Spin size={60} />}><DetailsApartment /></Suspense>}/>
          <Route path="homedetailsvilla" element={<Suspense fallback={<Spin size={60} />}><DetailsVilla /></Suspense>}/>
          <Route path="homedetailspenthouse" element={<Suspense fallback={<Spin size={60} />}><DetailsPenthouse /></Suspense>}/>
        </Route>

         {/* Contact page route :-  */}
        <Route path="/contact" element={<Suspense fallback={<Spin size={60} />}><Contact /></Suspense>}/>

         {/* Properties page Show property information in multiple boxes :-  */}
        <Route path="/property" element={<Suspense fallback={<Spin size={60} />}><Properties /></Suspense>}>
          <Route index element={<Suspense fallback={<Spin size={60} />}><Showall /></Suspense>}/>
          <Route path="apartment" element={<Suspense fallback={<Spin size={60} />}><Apartment /></Suspense>}/>
          <Route path="villa" element={<Suspense fallback={<Spin size={60} />}><Villa /></Suspense>}/>
          <Route path="penthouse" element={<Suspense fallback={<Spin size={60} />}><Penthouse /></Suspense>}/>
        </Route>

         {/* Details page to show single property details :-  */}
        <Route path="/details" element={<Suspense fallback={<Spin size={60} />}><PropertyDetail /></Suspense>}>
          <Route index element={<Suspense fallback={<Spin size={60} />}><DetailsApartment /></Suspense>}/>
          <Route path="detailsvilla" element={<Suspense fallback={<Spin size={60} />}><DetailsVilla /></Suspense>}/>
          <Route path="detailspenthouse" element={<Suspense fallback={<Spin size={60} />}><DetailsPenthouse /></Suspense>}/>
        </Route>

      </Route>

    </Routes>
  );
};

export default PageRouter;























// import { Suspense, lazy } from "react";
// import { Route, Routes } from 'react-router';
// import Contact from '../pages/Contact/Contact'
// import Properties from '../pages/Properties/Properties';
// import Showall from '../components/Properties_components/Showall';
// import Apartment from '../components/Properties_components/Apartment';
// import Villa from '../components/Properties_components/Villa';
// import Penthouse from '../components/Properties_components/Penthouse';
// import Properydetail from '../pages/SingleProperty/Properydetail';
// import DetailsApartment from '../components/Single_property_components/DetailsApartment';
// import DetailsVilla from '../components/Single_property_components/DetailsVilla';
// import DetailsPenthouse from '../components/Single_property_components/DetailsPenthouse';
// import Login from '../pages/Login/IndexLogin';
// import NavbarRoutes from "../components/Navbar_components/NavbarRoutes";
// import ProtectedRoute from "../components/Navbar_components/ProtectedRoute";
// const Home = lazy(() => import('../pages/Home/Home'));

// function MainRouting() {
//   return (
//     <>

//       <Routes>
 
//         <Route path='/' element={<Login/>}/>

//         <Route element={<ProtectedRoute> <NavbarRoutes /></ProtectedRoute>}>
        
//           <Route path='/home' element={
//             <Suspense fallback={<div>Loading Home...</div>}> 
//               <Home /> 
//             </Suspense>} />
//           <Route path='/contact' element={<Contact />} />
//           <Route path='/property' element={<Properties />}>
//               <Route index element={<Showall />} />
//               <Route path='apartment' element={<Apartment />} />
//               <Route path='villa' element={<Villa />} />
//               <Route path='penthouse' element={<Penthouse />} />
//           </Route>
//           <Route path='/details' element={<Properydetail />}>
//               <Route index element={<DetailsApartment />} />
//               <Route path='detailsvilla' element={<DetailsVilla />} />
//               <Route path='detailspenthouse' element={<DetailsPenthouse />} />
//           </Route>
//           <Route path='/home' element={<Home />} >
//               <Route index element={<DetailsApartment />} />
//               <Route path='homedetailsvilla' element={<DetailsVilla />} />
//               <Route path='homedetailspenthouse' element={<DetailsPenthouse />} />
//           </Route>
//         </Route>

//       </Routes>
//     </>
//   );
// }

// export default MainRouting;
