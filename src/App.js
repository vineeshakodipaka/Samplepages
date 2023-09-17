// src/App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import "./App.css";
import Navbar from "./layout/Navbar";
import Home from "./components/Home/Home";
import Footer from "./layout/Footer";
import About from "./components/About/About";
import Teampage from "./components/team/Teampage";
import Blogpage from "./components/Blog/Blogpage";
//import Errorpage from "./components/Errorpage/Errorpage";
import Contact from "./components/Contact/Contact";
import Singleshoppage from "./components/Shoppages/Singleshoppage";
import Shoppage from "./components/Shoppages/Shoppage";
import Bottombar from "./layout/Bottombar";
import SingleCardPage from "./components/Shoppages/SingleCardPage";
import Singleblog from "./components/Blog/Singleblog";
import MainShop from "./components/Shoppages/MainShop";
import NewBrandspage from "./components/Brandspage/NewBrandspage";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      {/* <Errorpage /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/team" element={<Teampage />} />
        <Route path="/blog" element={<Blogpage />} />
        <Route path="/singleblog" element={<Singleblog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/singleproductpage" element={<Singleshoppage />} />
        <Route path="/search-results" element={<Shoppage />} />
        <Route path="/singlecardpage/:cardId" element={<SingleCardPage />} />
        <Route path="/brands" element={<NewBrandspage />} />
        <Route path="/shoppage" element={<MainShop />} />
      </Routes>
      <Bottombar />
      <Footer />
    </div>
  );
};

export default App;
