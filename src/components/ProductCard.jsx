import react from 'react';
import { useParams } from "react-router-dom"
import productos from './../js/productos';
import React, { useEffect, useState } from 'react';

//Import Swiper 

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
//css Card 

import CardStyle from './../breadcumbs/css/productCard.css'
import { FaWhatsapp } from 'react-icons/fa';
// css Swiper

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const ProductCard = () => {
    const [dropdown, setDropdown] = useState(true);

    const useDropdown =()=>{
        setDropdown(!dropdown);
    }

    const { id } = useParams()
    const product = productos.find(product => product.id === id);
    let phone = 59899206715;
    let url = window.location.href;
    let whatsapp = `https://api.whatsapp.com/send/?phone=${phone}&text=Hola+tengo+una+consulta+sobre+${product.title}+con+descripcion+${product.description}+de+url+${url}`;

    const checkImages = () => {
        let images = document.querySelectorAll('.product-img .swiper-slide img');

        images.forEach((image) => {
            if (!image.hasAttribute('src')) {
                image.parentElement.remove();
            }
        })
    }

    useEffect(() => {
        document.body.classList.add('product-card');
        checkImages();
    })

    return (
        <div className="card-wrapper" id="product">
            <div className="card-container">
                <div className="product-img">
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        modules={[Navigation, Pagination]}
                        navigation
                        pagination

                    >
                        <SwiperSlide><img src={product.img1} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={product.img2} alt="" /></SwiperSlide>
                        <SwiperSlide><img src={product.img3} alt="" /></SwiperSlide>

                    </Swiper>

                </div>

                <div className="product-info">
                    <h1>{product.title}</h1>
                    <p>{product.description}</p>
                    <a className="btnConsultar" href={whatsapp} target="_blank"> Consultar <FaWhatsapp /> </a>
                    {product.caracteristicas != null ?
                        <div className={`dropdown ${dropdown ? 'active' : ''}`} onClick={useDropdown}>
                            <b>Caracteristicas</b> <b class="ico"></b>
                            <br />
                            <span>{product.caracteristicas}</span>
                        </div>
                        : ''}
                </div>
            </div>
        </div>
    );

}


export default ProductCard;