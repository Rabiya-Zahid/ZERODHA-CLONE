import React from 'react';
import ReactDOM from 'react-dom/client';
import  {BrowserRouter,Routes,Route}  from"react-router-dom";
import './index.css';
import HomePage from './landing_page/Home/HomePage';
import  SignUp  from'./landing_page/Signup/SignUp';

import Login from "./landing_page/Signup/Login";
import  AboutPage from'./landing_page/About/AboutPage';
import  ProductPage from'./landing_page/Products/ProductPage';
import  PricingPage from'./landing_page/Pricing/PricingPage';
import  Support  from'./landing_page/Support/Support';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from  './landing_page/NotFound';
import "@fortawesome/fontawesome-free/css/all.min.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar></Navbar>
 <Routes>
  <Route  path="/"  element={<HomePage/>}></Route>
  
  <Route path="/signup" element={<SignUp />} />

<Route path="/login" element={<Login />} />
  <Route  path="/about"  element={<AboutPage/>}></Route>
  <Route  path="/product"  element={<ProductPage/>}></Route>
  <Route  path="/pricing"  element={<PricingPage/>}></Route>
  <Route  path="/support"  element={<Support/>}></Route>
  <Route  path="*"  element={<NotFound/>}></Route>
 </Routes>
<Footer></Footer>
  </BrowserRouter>
 
);

