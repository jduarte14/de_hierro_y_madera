import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { FiFilter } from 'react-icons/fi';
import  './../breadcumbs/css/catalog.css';

const ProductCatalog = ({ productData }) => {
    const [filtersVisibility, setFiltersVisibility] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const { search } = useLocation();
    const navigate = useNavigate();
    const filters = queryString.parse(search);

    const handleVisibility = () => { 
        filtersVisibility ? setFiltersVisibility(false) : setFiltersVisibility(true);
    };

    const handleFilterChange = (filterValue) => {
        let newFilters = { ...filters };
        if (filterValue === 'all') {
            delete newFilters.category;
        } else {
            newFilters.category = filterValue;
        }
        const stringified = queryString.stringify(newFilters);
        navigate(`/catalogo?${stringified ? `${stringified}` : ''}`);
    };

    useEffect(() => {
        const filtered = filters.category
            ? productData.filter((product) => product.categoria === filters.category)
            : productData;
        setFilteredProducts(filtered);
    }, [filters.category, productData]);

    return (
        <div className="catalog-wrapper" id="content">
            <h1 className="catalog-title">Catalogo</h1>
            <div className="filter-mobile">
                <button onClick={handleVisibility}>
                    <FiFilter /> Filtrar catalogo
                </button>
            </div>
            <div className={filtersVisibility ? 'filter sidebar active' : 'filter sidebar'}>
            {filtersVisibility ? <div className="overlay" onClick={()=>{setFiltersVisibility(false)}}/> :null}
                <div className="sidebar-wrapper">
                    <div className="filter-column">
                        <h4> Filtros </h4>
                        <b>Muebles: </b>
                        <button onClick={() => handleFilterChange('mesas')}>Mesas</button>
                        <button onClick={() => handleFilterChange('escritorios')}>Escritorios</button>
                        <button onClick={() => handleFilterChange('sillas')}>Sillas</button>
                        <button onClick={() => handleFilterChange('taburetes')}>Taburetes</button>
                        <button onClick={() => handleFilterChange('toalleros')}>Toalleros</button>

                        <b>Luminaria:</b>
                        <button onClick={() => handleFilterChange('lamparas')}>Lámparas</button>
                        <button id="verTodos" onClick={() => handleFilterChange('all')}>
                            Quitar filtros
                        </button>
                    </div>
                </div>
            </div>
            <div className="catalog-container">
                <div className="filter-wrapper">
                    <h4>Muebles</h4>
                    <div id="category-container">
                        <button onClick={() => handleFilterChange('mesas')}>Mesas</button>
                        <button onClick={() => handleFilterChange('escritorios')}>Escritorios</button>
                        <button onClick={() => handleFilterChange('sillas')}>Sillas</button>
                        <button onClick={() => handleFilterChange('taburetes')}>Taburetes</button>
                        <button onClick={() => handleFilterChange('toalleros')}>Toalleros</button>

                    </div>
                    <h4>Diseños</h4>
                    <div id="category-container">
                        <button onClick={() => handleFilterChange('lamparas')}>Lámparas</button>
                        <button id="verTodos" onClick={() => handleFilterChange('all')}>
                            Quitar filtros
                        </button>
                    </div>
                </div>
                <div className="product-grid">
                    {filteredProducts.map((producto) => (
                        <Link to={`/productos/${producto._id}`} className="product-container" key={producto._id} category={producto.categoria}>
                            <img src={producto.imagen} alt="img-product" />
                            <div className="catalog-info">
                                <b className="title">{producto.nombre}</b>
                                <span>{producto.descripcionCorta}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductCatalog;