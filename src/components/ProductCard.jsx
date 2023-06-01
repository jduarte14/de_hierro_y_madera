import { useParams } from "react-router-dom"
import productos from './../js/productos';
import React, { useEffect, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

//Import Swiper 

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
//css Card 
import './../breadcumbs/css/mailPopUp.css';
import './../breadcumbs/css/productCard.css'
import { FaWhatsapp } from 'react-icons/fa';
import { GrFormClose } from 'react-icons/gr';
import { AiOutlineMail } from 'react-icons/ai';

// css Swiper

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const ProductCard = () => {
    const [dropdown, setDropdown] = useState(true);
    const [mailPopUp, setPopUpMail] = useState(false);

    const name = useRef();
    const mail = useRef();
    const message = useRef();

    const useDropdown = () => {
        setDropdown(!dropdown);
    }

    const useMailPopUp = (e) => {
        e.preventDefault();
        const { id, title } = product;

        const templateParams = {
            user_name: name.current.value,
            user_email: mail.current.value,
            user_message: message.current.value,
            product_title: title,
            product_id: id,
            product_href: window.location.href
        };



        try {
            emailjs.send('service_ogq8ndd', 'template_5nqxx31', templateParams, 'u9cW9vw43bAysSCD4')
                .then(function (response) {
                    console.log('SUCCESS!', response.status, response.text);
                })
                .catch(function (error) {
                    console.log('FAILED...', error);
                });
        } catch (error) {
            console.log('Error en el bloque try:', error);
        }


        console.log(templateParams);

    }

    const openPopup = () => {
        setPopUpMail(true);
    };

    const closePopup = () => {
        setPopUpMail(false);
    };

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
                    <div className="fixed-row">
                        <div className="btns-container">
                            <a className="btnConsultar" href={whatsapp} target="_blank"> Consultar <FaWhatsapp /> </a>
                            <button className="btnConsultar" onClick={openPopup}> Envianos un mail <AiOutlineMail /> </button>
                        </div>
                    </div>


                    {product.caracteristicas != null ?
                        <div className={`dropdown ${dropdown ? 'active' : ''}`} onClick={useDropdown}>
                            <b>Caracteristicas</b> <b class="ico"></b>
                            <br />
                            <span>{product.caracteristicas}</span>
                        </div>
                        : ''}
                </div>
            </div>
            {mailPopUp &&
                <>
                    <div className={`pp-overlay  ${mailPopUp ? 'fade-in' : 'fade-out'}`} onClick={closePopup} />
                    <div className="pp-container">
                        <div className={`pp-content ${mailPopUp ? 'fade-in' : 'fade-out'}`}>
                            <div className="pp-close" onClick={closePopup}>
                                <GrFormClose />
                            </div>
                            <h2> Contactanos por correo </h2>
                            <form id="contact-mail" onSubmit={useMailPopUp} >
                                <input type="text" placeholder="Nombre completo" name='user_name' ref={name} required />
                                <input type="text" placeholder="Mail" name='user_email' ref={mail} required />
                                <textarea rows="8" placeholder="Mensaje" name='user_message' ref={message} required />
                                <input type="submit" id="btnEnviar" value='Enviar' />

                            </form>
                        </div>
                    </div>

                </>

            }
        </div>
    );

}


export default ProductCard;