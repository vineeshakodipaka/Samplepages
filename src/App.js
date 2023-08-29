// src/App.js
import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductCard from './components/ProductCard';
import Cart from './components/Cart';
import products from './Data';
import './App.css'
import Navbar from './layout/Navbar';
import Home from './components/Home/Home';
import Footer from './layout/Footer';
import About from './components/About/About';
import Teampage from './components/team/Teampage';
import Blogpage from './components/Blog/Blogpage';


const App = () => {
  return (
  
     <div className='app'>
         <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/team" element={<Teampage />} />
          <Route path="/blog" element={<Blogpage />} />
        </Routes>
        <Footer/>
      
     </div>
        

  );
};

export default App; 
