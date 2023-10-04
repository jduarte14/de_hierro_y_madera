import React, { useState, useRef, useEffect } from "react";
import { fetchData } from "../helpers/fetchHelper";
import { Link } from 'react-router-dom';

const DashboardCatalog = ({ productData }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [updatedProduct, setUpdatedProduct] = useState(productData);
  const deleteData = async (id) => {
    const deleteUrl = `https://dehierroymaderabackend-production.up.railway.app/api/products/${id}`;
    try {
      const response = await fetchData(deleteUrl, "DELETE");
      const updatedProductList = updatedProduct.filter(
        (product) => product._id !== id
      );
      setUpdatedProduct(updatedProductList);
      alert(response.message);
    }

    catch (error) {
      throw new Error(error.message);
    }
  }


  useEffect(() => {
    setUpdatedProduct(productData);
  }, [productData]);

  return (
    <div className="dashboard-wrapper">
      <div className="d-principal-row">
        <h1>Catalogo de productos</h1>
        <Link className="create-product" to="/admin/catalog/create">
        Crear producto
      </Link>
      </div>
      
      <div className="product-dashboard-container">
        {updatedProduct.map((producto) => (
          producto && (
            <div  className="product-dashboard" key={producto._id} category={producto.categoria}>
              <img src={producto.imagen} alt="img-product" />
              <div className="catalog-info">
                <b className="title">{producto.nombre}</b>
                <span>{producto.descripcionCorta}</span>
                <div className="button-row">
                  <Link to={`/dashboard/product/${producto._id}`} >Editar producto</Link>
                  <button onClick={() => deleteData(producto._id)}>Eliminar producto</button>
                </div>
              </div>
            </div>
          )))}
      </div>
    </div>
  );
};

export default DashboardCatalog;
