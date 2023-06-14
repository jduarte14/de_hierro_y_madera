import { useParams } from "react-router-dom";
import React, { useEffect, useState, useRef } from 'react';
import emailjs from 'emailjs-com';

// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
// CSS Card
import './../breadcumbs/css/mailPopUp.css';
import './../breadcumbs/css/productCard.css';
import { FaWhatsapp } from 'react-icons/fa';
import { GrFormClose } from 'react-icons/gr';
import { AiOutlineMail } from 'react-icons/ai';
import { CgSpinnerTwoAlt } from 'react-icons/cg';
// CSS Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProductCard = () => {
    const [dropdown, setDropdown] = useState(true);
    const [mailPopUp, setPopUpMail] = useState(false);
    const [product, setProduct] = useState(null);
    const name = useRef();
    const mail = useRef();
    const message = useRef();
    const phoneNumber = useRef();
    const productImagen1 = useRef();
    const productImagen2 = useRef();
    const productImagen3 = useRef();

    const useDropdown = () => {
        setDropdown(!dropdown);
    };

    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://dehierroymaderabackend-production.up.railway.app/api/products/${id}`);
                const productData = await response.json();

                if (!response.ok) {
                    throw new Error('No se pudo obtener los datos');
                }
                setProduct(productData.product);

            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [id]);

    const useMailPopUp = (e) => {
        e.preventDefault();
        const { _id, nombre } = product;

        const templateParams = {
            user_name: name.current.value,
            user_email: mail.current.value,
            user_message: message.current.value,
            user_phone: phoneNumber.current.value,
            product_title: nombre,
            product_id: _id,
            product_href: window.location.href
        };

        try {
            emailjs.send('service_ogq8ndd', 'template_5nqxx31', templateParams, 'u9cW9vw43bAysSCD4')
                .then(function (response) {
                    console.log('SUCCESS!', response.status, response.text);
                    alert('Mensaje enviado correctamente, ya nos pondremos en contacto contigo');
                    closePopup();
                })
                .catch(function (error) {
                    console.log('FAILED...', error);
                });
        } catch (error) {
            console.log('Error en el bloque try:', error);
        }
    };

    const openPopup = () => {
        setPopUpMail(true);
    };

    const closePopup = () => {
        setPopUpMail(false);
    };

    useEffect(() => {
        document.body.classList.add('product-card');
    }, []);

    let phone = 59899323702;
    let url = window.location.href;

    return (
        <div className="card-wrapper" id="product">
            {product ? (
                <div className="card-container">
                    {(product.imagen2 || product.imagen3) ? (
                        <div className="product-img">
                            <Swiper
                                spaceBetween={0}
                                slidesPerView={1}
                                navigation
                                pagination={{ clickable: true }}
                            >
                                <SwiperSlide>
                                    <img src={product.imagen} alt="" ref={productImagen1} />
                                </SwiperSlide>
                                {product.imagen2 && product.imagen2.trim() !== '' && (
                                    <SwiperSlide>
                                        <img src={product.imagen2} alt="" ref={productImagen2} />
                                    </SwiperSlide>
                                )}
                                {product.imagen3 && product.imagen3.trim() !== '' && (
                                    <SwiperSlide>
                                        <img src={product.imagen3} alt="" ref={productImagen3} />
                                    </SwiperSlide>
                                )}
                            </Swiper>
                        </div>
                    ) : (
                        <div className="product-img">
                            <img src={product.imagen} alt="" />
                        </div>
                    )}

                    <div className="product-info">
                        <h1>{product.nombre}</h1>
                        <p>{product.descripcion}</p>
                        <div className="fixed-row">
                            <div className="btns-container">
                                <a className="btnConsultar" href={`https://api.whatsapp.com/send/?phone=${phone}&text=Hola+tengo+una+consulta+sobre+${product.nombre}+de+url+${url}`} target="_blank" rel="noopener noreferrer">
                                    Consultar <FaWhatsapp />
                                </a>
                                <button className="btnConsultar" onClick={openPopup}>
                                    Envianos un mail <AiOutlineMail />
                                </button>
                            </div>
                        </div>

                        {product.caracteristicas && (
                            <div className={`dropdown ${dropdown ? 'active' : ''}`} onClick={useDropdown}>
                                <b>Caracteristicas</b> <b className="ico" />
                                <br />
                                <span>{product.caracteristicas}</span>
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <div className="spinner">
                    <CgSpinnerTwoAlt />
                </div>
            )}

            {mailPopUp && (
                <>
                    <div className={`pp-overlay ${mailPopUp ? 'fade-in' : 'fade-out'}`} onClick={closePopup} />
                    <div className="pp-container">
                        <div className={`pp-content ${mailPopUp ? 'fade-in' : 'fade-out'}`}>
                            <div className="pp-close" onClick={closePopup}>
                                <GrFormClose />
                            </div>
                            <h2>Contactanos por correo</h2>
                            <form id="contact-mail" onSubmit={useMailPopUp}>
                                <input type="text" placeholder="Nombre completo" name="user_name" ref={name} required />
                                <input type="text" placeholder="Mail" name="user_email" ref={mail} required />
                                <input type="number" placeholder="Número" name="user_phone" ref={phoneNumber} required />
                                <textarea rows="8" placeholder="Mensaje" name="user_message" ref={message} required />
                                <input type="submit" id="btnEnviar" value="Enviar" />
                            </form>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default ProductCard;
