//JSX
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

//JS
import productos from './../js/productos';

import { FiFilter } from 'react-icons/fi'
import { FaCheck } from 'react-icons/fa'

//CSS
import catalogStyle from './../breadcumbs/css/catalog.css';
//JS
import ShowFilters from './../js/ShowFilters';


const ProductCatalog = () => {

    const [filteredProducts, setFilteredProducts] = useState(productos);
    const { search } = useLocation();
    const navigate = useNavigate();
    const filters = queryString.parse(search);

    const handleFilterChange = (filterValue) => {
        let newFilters = { ...filters };
        if (filterValue === "all") {
            delete newFilters.category;
        }
        else {
            newFilters.category = filterValue;

        }
        const stringified = queryString.stringify(newFilters);
        navigate(`/catalogo?${stringified ? `${stringified}` : ''}`);
    };

    //antes de cargar los productos
    React.useEffect(() => {
        const filtered = filters.category !== undefined ? productos.filter((product) => product.category === filters.category) : productos;
        setFilteredProducts(filtered);
    }, [filters.category]);

    return (
        <div className="catalog-wrapper" id='content'>
            <h1 className='catalog-title'>Catalogo </h1>
            <div className="filter-mobile">
                <button onClick={ShowFilters}><FiFilter /> Filtrar catalogo </button>
            </div>
            <div className='filter sidebar'>
                <div className="sidebar-wrapper">
                    <div className="filter-column">
                        <h4> Filtros </h4>
                        <b>Hogar: </b>
                        <button onClick={() => handleFilterChange('mesas')}>Mesas </button>
                        <button onClick={() => handleFilterChange('sillas')}>Sillas</button>
                        <b>Diseños:</b>
                        <button onClick={() => handleFilterChange('lamparas')}>Lamparas </button>
                        <button id="verTodos" onClick={() => handleFilterChange('all')}>Quitar filtros</button>
                    </div>

                </div>


            </div>
            <div className="catalog-container">

                <div className="filter-wrapper">
                    <h4>Muebles</h4>

                    <div id="category-container">
                        <button onClick={() => handleFilterChange('mesas')}>Mesas </button>
                        <button onClick={() => handleFilterChange('sillas')}>Sillas</button>
                    </div>
                    <h4>Diseños</h4>

                    <div id="category-container">
                        <button data="techado" onClick={() => handleFilterChange('lamparas')}>Lamparas </button>
                    </div>
                </div>

                <>

                    <div className="product-grid">


                        {
                            filteredProducts.map((producto) => {
                                return <div className="product-container" key={producto.id} category={producto.category}>
                                    <img src={producto.img1} alt="img-product" />
                                    <div className="catalog-info">
                                        <Link to={`/productos/${producto.id}`}>
                                            {producto.title}
                                        </Link>
                                        <span>{producto.previewDescription}</span>
                                    </div>

                                </div>
                            })
                        }
                    </div>
                </>
            </div>
        </div>
    )

}


export default ProductCatalog;