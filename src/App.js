import './App.css';
import './Globle.scss'
// import React, { Suspense, lazy } from "react";
// import { Route, Routes } from 'react-router';
// import Navbar from './components/Navbar';
// import Contact from './pages/Contact/Contact'
// import Properties from './components/Properties';
// import Home from './components/Home';
// import Showall from './components/Showall';
// import Apartment from './components/Apartment';
// import Villa from './components/Villa';
// import Penthouse from './components/Penthouse';
// import Properydetail from './components/Properydetail';
// import DetailsApartment from './components/DetailsApartment';
// import DetailsVilla from './components/DetailsVilla';
// import DetailsPenthouse from './components/DetailsPenthouse';
// import Login from './components/Login';
// const Home = lazy(() => import('./components/Home'));
import PageRouter from './Router/index';

function App() {
  return (
    <>
      <PageRouter/>
    </>
  );
}

export default App; 
