import React, { useState, useRef, useEffect } from "react";
import { Link } from 'react-router-dom';

const DashboardCatalog = ({ productData }) => {
  return (
    <div className="dashboard-wrapper">
      <div className="d-principal-row">
        <h1>Catalogo de productos</h1>
        <Link className="create-product" to="/admin/catalog/create">
          Crear producto
        </Link>
      </div>

      <div className="product-dashboard-container">
        {productData.map((producto) => (
          producto && (
            <div className="product-dashboard" key={producto._id} category={producto.categoria}>
              <img src={producto.imagen} alt="img-product" />
              <div className="catalog-info">
                <b className="title">{producto.nombre}</b>
                <span>{producto.descripcionCorta}</span>
                <div className="button-row">
                  <Link to={`/dashboard/product/${producto._id}`} >Gestionar producto</Link>

                </div>
              </div>
            </div>
          )))}
      </div>
    </div>
  );
};

export default DashboardCatalog;
