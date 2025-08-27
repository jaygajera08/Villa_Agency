import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";
import NavbarRoutes from "../Layout/Navbar/NavbarRoutes";
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

const PageRouter = () => (
  <Routes>
    <Route element={<NavbarRoutes />}>
      <Route index element={<Suspense fallback={<Spin size={60} />}><Home /></Suspense>} />
      <Route path="home" element={<Suspense fallback={<Spin size={60} />}><Home /></Suspense>} />
      <Route path="home/homedetailsvilla" element={<Suspense fallback={<Spin size={60} />}><DetailsVilla /></Suspense>} />
      <Route path="home/homedetailspenthouse" element={<Suspense fallback={<Spin size={60} />}><DetailsPenthouse /></Suspense>} />
      <Route path="contact" element={<Suspense fallback={<Spin size={60} />}><Contact /></Suspense>} />
      <Route path="property" element={<Suspense fallback={<Spin size={60} />}><Properties /></Suspense>}>
        <Route index element={<Suspense fallback={<Spin size={60} />}><Showall /></Suspense>} />
        <Route path="apartment" element={<Suspense fallback={<Spin size={60} />}><Apartment /></Suspense>} />
        <Route path="villa" element={<Suspense fallback={<Spin size={60} />}><Villa /></Suspense>} />
        <Route path="penthouse" element={<Suspense fallback={<Spin size={60} />}><Penthouse /></Suspense>} />
      </Route>
      <Route path="details" element={<Suspense fallback={<Spin size={60} />}><PropertyDetail /></Suspense>}>
        <Route index element={<Suspense fallback={<Spin size={60} />}><DetailsApartment /></Suspense>} />
        <Route path="detailsvilla" element={<Suspense fallback={<Spin size={60} />}><DetailsVilla /></Suspense>} />
        <Route path="detailspenthouse" element={<Suspense fallback={<Spin size={60} />}><DetailsPenthouse /></Suspense>} />
      </Route>
    </Route>
  </Routes>
);

export default PageRouter;









// import { lazy, Suspense } from "react";
// import { Route, Routes } from "react-router";
// import NavbarRoutes from "../Layout/Navbar/NavbarRoutes";
// // import ProtectedRoute from "../Layout/Navbar/ProtectedRoute";
// import Spin from "../components/LoadingSpinner/Spin";


// const Home = lazy(() => import("../pages/Home/Home"));
// const Contact = lazy(() => import("../pages/Contact/Contact"));
// const Properties = lazy(() => import("../pages/Properties/Properties"));
// const PropertyDetail = lazy(() => import("../pages/SingleProperty/Properydetail"));
// const Showall = lazy(() => import("../pages/Properties/lib/Showall"));
// const Apartment = lazy(() => import("../pages/Properties/lib/Apartment"));
// const Villa = lazy(() => import("../pages/Properties/lib/Villa"));
// const Penthouse = lazy(() => import("../pages/Properties/lib/Penthouse"));
// const DetailsApartment = lazy(() => import("../pages/SingleProperty/lib/DetailsApartment"));
// const DetailsVilla = lazy(() => import("../pages/SingleProperty/lib/DetailsVilla"));
// const DetailsPenthouse = lazy(() => import("../pages/SingleProperty/lib/DetailsPenthouse"));

// const PageRouter = () => {
//   return (
//     <Routes>
//       {/* first render login page :-  */}
//       <Route path="/" element={<Suspense fallback={<Spin size={60} />}><NavbarRoutes /></Suspense>}/>

//       {/* Navbar route is set to all pages :- */}
//       <Route element={<NavbarRoutes />}>
        
//         {/* home page property detail information routes :-  */}
//         <Route path="/home" element={<Suspense fallback={<Spin size={60} />}><Home /></Suspense>}>
//           <Route index element={<Suspense fallback={<Spin size={60} />}><DetailsApartment /></Suspense>}/>
//           <Route path="homedetailsvilla" element={<Suspense fallback={<Spin size={60} />}><DetailsVilla /></Suspense>}/>
//           <Route path="homedetailspenthouse" element={<Suspense fallback={<Spin size={60} />}><DetailsPenthouse /></Suspense>}/>
//         </Route>

//          {/* Contact page route :-  */}
//         <Route path="/contact" element={<Suspense fallback={<Spin size={60} />}><Contact /></Suspense>}/>

//          {/* Properties page Show property information in multiple boxes :-  */}
//         <Route path="/property" element={<Suspense fallback={<Spin size={60} />}><Properties /></Suspense>}>
//           <Route index element={<Suspense fallback={<Spin size={60} />}><Showall /></Suspense>}/>
//           <Route path="apartment" element={<Suspense fallback={<Spin size={60} />}><Apartment /></Suspense>}/>
//           <Route path="villa" element={<Suspense fallback={<Spin size={60} />}><Villa /></Suspense>}/>
//           <Route path="penthouse" element={<Suspense fallback={<Spin size={60} />}><Penthouse /></Suspense>}/>
//         </Route>

//          {/* Details page to show single property details :-  */}
//         <Route path="/details" element={<Suspense fallback={<Spin size={60} />}><PropertyDetail /></Suspense>}>
//           <Route index element={<Suspense fallback={<Spin size={60} />}><DetailsApartment /></Suspense>}/>
//           <Route path="detailsvilla" element={<Suspense fallback={<Spin size={60} />}><DetailsVilla /></Suspense>}/>
//           <Route path="detailspenthouse" element={<Suspense fallback={<Spin size={60} />}><DetailsPenthouse /></Suspense>}/>
//         </Route>

//       </Route>

//     </Routes>
//   );
// };

// export default PageRouter;