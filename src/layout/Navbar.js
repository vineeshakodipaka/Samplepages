// src/layout/Navbar.js
import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, searchProducts } from '../actions';
import './Navbar.css'
const Navbar = () => {
  const { totalQuantity } = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');


  
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query); // Update the local state
    dispatch(searchProducts(query)); // Dispatch the search action
  };

  // const handleSearch = () => {
  //   dispatch(searchProducts(searchQuery));
  // };

  // const clearSearch = () => {
  //   dispatch(searchProducts('')); // Clear the search query
  //   setSearchQuery(''); // Clear the local state
  // };
  
  return (
    <nav className="navbar navbar-expand-lg navbar headerbar mt-lg-3 mb-lg-3">
     
      <div className="container">
       
      <Link to="/" className="nav-item navbrand d-flex  me-xl-5" style={{textDecoration:"none"}}>
        <h4 >Elite Enterprise</h4>
      </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-xl-5 ">
          <li className="nav-item px-xl-2">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item px-xl-2">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li class="nav-item dropdown px-xl-2">
          <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Pages
          </Link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link class="dropdown-item" to="/team">Team</Link></li>
            <li><Link class="dropdown-item" to="/blog">Blogs</Link></li>
            <li><Link class="dropdown-item" href="#">Something else here</Link></li>
          </ul>
          </li>
            <li className="nav-item px-xl-2">
              <Link to="/shop" className="nav-link">
                Shop
              </Link>
            </li>
            <li className="nav-item px-xl-2">
              <Link to="/brands" className="nav-link">
                Brands
              </Link>
            </li>
            <li className="nav-item px-xl-2">
              <Link to="/support" className="nav-link">
                Support
              </Link>
            </li>
            <div className="input-group col">
          <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearch} // Update search as we type
          className="form-control rounded-pill ms-xl-4  my-3 my-lg-0 my-md-0" 
          // onChange={(e) => setSearchQuery(e.target.value)}
          />
        {/* <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
        <button className="btn btn-secondary" onClick={clearSearch}>
          Clear
        </button> */}
        </div>
            <li className="nav-item px-lg-2  rounded-pill ms-xl-4 my-3 my-lg-0 my-md-0" style={{border:"1px solid #E0E0E0"}}>
              <Link to="/cart" className="nav-link ">
              <i className="fas fa-shopping-cart rounded-circle  p-2 " style={{background:"#44160F",color:"white"}}></i>
              <span className='px-3'>Cart-({totalQuantity})</span>
              {/* <span className="badge rounded-pill badge-notification bg-primary">{totalQuantity}</span> */}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
