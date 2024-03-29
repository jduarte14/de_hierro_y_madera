import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { OwnerProvider } from './context/ownerContext';

//Components
import HomeContent from './breadcumbs/homeContent';
import Header from './breadcumbs/header';
import ProductCard from './components/ProductCard';
import ProductCatalog from './components/Catalog';
import Footer from './breadcumbs/Footer';
import Error from './components/Error';
import Dashboard from './components/dashboard/dashboard';
import DashboardCatalog from './components/dashboard/catalog';
import EditProduct from './components/dashboard/editProduct';
import Login from './components/auth/login';
import SiteMap from './components/sitemap';
import CreateProduct from './components/dashboard/createProduct';
import BannersDashboard from './components/dashboard/banners/bannersDashboard';
import BannersEdition from './components/dashboard/banners/bannersEdition';
import BannersCreation from './components/dashboard/banners/bannerCreation';

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
      <OwnerProvider>
        <Header logged={logged} />
        <Routes>
          <Route exact path="/" element={<HomeContent productData={product} />} />
          <Route exact path="/productos/:id" element={<ProductCard products={product} />} />
          <Route exact path="/catalogo" element={<ProductCatalog productData={product} />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/sitemap.xml" element={<SiteMap />} />
          {
            logged ? <Route exact path="/admin" element={<Dashboard />} /> : <Route exact path="/admin" element={<Error />} />
          }
          {
            logged ? <Route exact path="/dashboard/product/:id" element={<EditProduct products={product} />} /> : <Route exact path="/admin" element={<Error />} />
          }
          {
            logged ? <Route exact path="/admin/catalog" element={<DashboardCatalog productData={product} />} /> : <Route exact path="/admin/catalog" element={<Error />} />
          }
          {
            logged ? <Route exact path="/admin/catalog/create" element={<CreateProduct />} /> : <Route exact path="/admin/catalog/:id" element={<Error />} />
          }
          {
            logged ? <Route exact path="/admin/catalog/banners" element={<BannersDashboard />} /> : <Route exact path="/admin/catalog/:id" element={<Error />} />
          }
          {
            logged ? <Route exact path="/admin/catalog/banners/edit/:id" element={<BannersEdition />} /> : <Route exact path="/admin/catalog/:id" element={<Error />} />
          }
          {
            logged ? <Route exact path="/admin/catalog/banners/create" element={<BannersCreation />} /> : <Route exact path="/admin/catalog/:id" element={<Error />} />
          }
          <Route exact path="*" element={<Error />} />
        </Routes>
        <Footer />
      </OwnerProvider>
    </div>
  );
}

export default App;
