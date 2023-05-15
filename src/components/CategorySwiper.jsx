import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import Sillas from './../img/categorias/sillas.svg';
import Techos from './../img/categorias/techos.svg';
import Mesas from './../img/categorias/mesas.svg'; 

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
                slidesPerView: 6
            },
            640: {
                width: 640,
                slidesPerView: 2,
            },
            320: {
                width: 320,
                slidesPerView: 2,
            },
        }}
          >
            <SwiperSlide>
                <div className="category-container">
                <img src={Sillas} alt="" />
                <b>Techos</b>
            </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="category-container">
                <img src={Techos} alt="" />
                <b>Sillas</b>
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
                <b>Techos</b>
            </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="category-container">
                <img src={Techos} alt="" />
                <b>Sillas</b>
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
                <b>Techos</b>
            </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="category-container">
                <img src={Techos} alt="" />
                <b>Sillas</b>
            </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="category-container">
                <img src={Mesas} alt="" />
                <b>Mesas</b>
            </div>
            </SwiperSlide>
            
        </Swiper>
    );
};

export default CategorySwiper;  