import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

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
            <div className="category-container">
                <img src={Escritorio} alt="" />
                <b>Escritorios</b>
            </div>


            <div className="category-container">
                <img src={Lamparas} alt="" />
                <b>Lamparas</b>
            </div>


            <div className="category-container">
                <img src={Mesas} alt="" />
                <b>Mesas</b>
            </div>


            <div className="category-container">
                <img src={Sillas} alt="" />
                <b>Sillas</b>
            </div>


            <div className="category-container">
                <img src={Taburete} alt="" />
                <b>Taburetes</b>
            </div>


            <div className="category-container">
                <img src={Toallero} alt="" />
                <b>Toalleros</b>
            </div>
        </div>

    );
};

export default CategorySwiper;  