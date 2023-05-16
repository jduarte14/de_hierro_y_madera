import { Link } from 'react-router-dom';

import Escritorio from './../img/categorias/escritorio.png';
import Lamparas from './../img/categorias/lamparas.png';
import Mesas from './../img/categorias/mesas.png';
import Sillas from './../img/categorias/sillas.png';
import Taburete from './../img/categorias/taburete.png';
import Toallero from './../img/categorias/toallero.png';


import 'swiper/css';
import 'swiper/css/navigation';

const CategorySwiper = () => {
    return (

        <div className="category-wrapper">
            <Link to='/catalogo?category=escritorios' className="category-container">
                <img src={Escritorio} alt="" />
                <b>Escritorios</b>
            </Link>
            <Link to='/catalogo?category=lamparas' className="category-container">
                <img src={Lamparas} alt="" />
                <b>Lamparas</b>
            </Link>


            <Link to='/catalogo?category=mesas' className="category-container">
                <img src={Mesas} alt="" />
                <b>Mesas</b>
            </Link>


            <Link to='/catalogo?category=sillas' className="category-container">
                <img src={Sillas} alt="" />
                <b>Sillas</b>
            </Link>


            <Link to='/catalogo?category=taburetes' className="category-container">
                <img src={Taburete} alt="" />
                <b>Taburetes</b>
            </Link>

            <Link to='/catalogo?category=toalleros' className="category-container">
                <img src={Toallero} alt="" />
                <b>Toalleros</b>
            </Link>
        </div>

    );
};

export default CategorySwiper;  