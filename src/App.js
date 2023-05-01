import './App.css';
import react from 'react';
import HomeContent from './breadcumbs/homeContent';
import Header from './breadcumbs/header';
import { Routes, Route } from "react-router-dom";
import ProductCard from "./components/ProductCard";
import ProductCatalog from "./components/Catalog";
import Footer from "./breadcumbs/Footer";
import Error from './components/Error';
import { useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';
function App() {
  const location = useLocation();
  useEffect(() => {
    scrollTop();
  }, [location]);
  function scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<HomeContent />}></Route>
        <Route exact path="/productos/:id" element={<ProductCard />}></Route>
        <Route exact path="/catalogo" element={<ProductCatalog />}></Route>
        <Route exact path="*" element={<Error />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
