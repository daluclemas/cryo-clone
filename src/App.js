import React, {useState, useEffect} from 'react'
import logo from './logo.svg';
// import './App.scss';
import './styles/css/App.css'
import {motion} from 'framer-motion'
import Starter from './sections/Starter';
import About from './sections/About';
import Why from './sections/Why';
import Testimonial from './sections/Testimonial';
import Blogs from './sections/Blogs';
import Footer from './sections/Footer';
import Scroll from './sections/Scroll';


// import Navbar from './components/navbar/Navbar';
// import {FaBars} from 'react-icons/fa'


function App() {

return (
  <div className="app">
    <Scroll />
   <Starter />
   <About />
    <Why />
    <Testimonial />
    <Blogs />
    <Footer />
  </div>
);
 
}

export default App;
