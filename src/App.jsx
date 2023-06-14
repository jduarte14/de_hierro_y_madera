import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomeContent from './breadcumbs/homeContent';
import Header from './breadcumbs/header';
import ProductCard from './components/ProductCard';
import ProductCatalog from './components/Catalog';
import Footer from './breadcumbs/Footer';
import Error from './components/Error';
import Dashboard from './components/dashboard/dashboard';
import DashboardCatalog from './components/dashboard/catalog';
import Login from './components/auth/login';
import SiteMap from './components/sitemap';


function App() {
  const location = useLocation();
  const [product, setProduct] = useState([]);
  const [logged, setLogged] = useState(false);

  const loggedUser = () => {
    if (sessionStorage.getItem("auth_id")) {
      setLogged(true);
      console.log("logged");
    }
    else {
      setLogged(false);
      console.log("not logged");
    }
  }


  useEffect(() => {
    getData();
    loggedUser();
  }, []);

  const getData = async () => {
    try {
      const response = await fetch('https://dehierroymaderabackend-production.up.railway.app/api/products/');
      const productData = await response.json();
      if (!response.ok) {
        throw new Error('No se pudo obtener los datos');
      }
      let productsData = productData.products
      setProduct(productsData);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  useEffect(() => {
    scrollTop();
  }, [location]);

  function scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="App">
      <Header logged={logged}/>
      <Routes>
        <Route exact path="/" element={<HomeContent productData={product} />} />
        <Route exact path="/productos/:id" element={<ProductCard productInfo={product} />} />
        <Route exact path="/catalogo" element={<ProductCatalog productData={product}/>} />
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/sitemap" element={<SiteMap/>}/>
        {
          logged ? <Route exact path="/admin" element={<Dashboard />} /> : <Route exact path="/admin" element={<Error />} />
        }
        {
          logged ? <Route exact path="/admin/catalog" element={<DashboardCatalog productData={product}/>} /> : <Route exact path="/admin/catalog" element={<Error />} />
        }
        <Route exact path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
