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
        <Swiper  spaceBetween={25} 
        modules={[Navigation ]}
        navigation
        pagination
        breakpoints={{
            1024: {
                width:1024,
                slidesPerView: 5
            },
            640: {
                width: 640,
                slidesPerView: 3,
            },
            320: {
                width: 320,
                slidesPerView: 3,
            },
        }}
          >
            <SwiperSlide>
                <div className="category-container">
                <img src={Escritorio} alt="" />
                <b>Escritorios</b>
            </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="category-container">
                <img src={Lamparas} alt="" />
                <b>Lamparas</b>
            </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="category-container">
                <img src={Mesas} alt="" />
                <b>Mesas</b>
            </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="category-container">
                <img src={Sillas} alt="" />
                <b>Sillas</b>
            </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="category-container">
                <img src={Taburete} alt="" />
                <b>Taburetes</b>
            </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="category-container">
                <img src={Toallero} alt="" />
                <b>Toalleros</b>
            </div>
            </SwiperSlide>
           
            
        </Swiper>
    );
};

export default CategorySwiper;  