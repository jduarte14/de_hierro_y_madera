import React, { useEffect, useState, useRef, Suspense } from 'react';
import {  useParams,Navigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';

import './../breadcumbs/css/mailPopUp.css';
import './../breadcumbs/css/productCard.css';
import { FaWhatsapp } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { CgSpinnerTwoAlt } from 'react-icons/cg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ProductCard = () => {
    const MailPopUp = React.lazy(() => import('./mailPopUp'));

    const [dropdown, setDropdown] = useState(true);
    const [mailPopUp, setPopUpMail] = useState(false);
    const [product, setProduct] = useState(null);
    const [redirectToError, setRedirectToError] = useState(false);
    const swiperRef = useRef();

    const { id } = useParams();

    const productImagen1 = useRef();
    const productImagen2 = useRef();
    const productImagen3 = useRef();

    const useDropdown = () => {
        setDropdown(!dropdown);
    };

    const handleFetchRejection = () => {
        return setRedirectToError(true);
    }
    const fetchData = async () => {
        try {
            const response = await fetch(`https://dehierroymaderabackend-production.up.railway.app/api/products/${id}`);
            const productData = await response.json();
            if (!response.ok || !response) {
                return handleFetchRejection();
            }
            setProduct(productData.product);

        } catch (error) {
            return handleFetchRejection();
        }
    };
    useEffect(() => {
        fetchData();
    }, [id]);

    const handlePopUp = () => {
        mailPopUp ? setPopUpMail(false) : setPopUpMail(true);
    };



    useEffect(() => {
        return () => {
            document.body.classList.remove('product-card');
        };

    }, []);

    let phone = 59899323702;
    let url = window.location.href;

    return (
        <div className="card-wrapper" id="product">
            {product ? (
                <div className="card-container">
                    {(product.imagen2 || product.imagen3) ? (
                        <div className="product-img">
                            <Swiper ref={swiperRef}
                                spaceBetween={0}
                                slidesPerView={1}
                            
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
                                <button className="swiper-button-next" onClick={()=>{ swiperRef.current.swiper.slidePrev()}} />
                                <button className="swiper-button-prev" onClick={()=>{ swiperRef.current.swiper.slideNext()}}/>
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
                                <button className="btnConsultar" onClick={handlePopUp}>
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
                <Suspense>
                    <MailPopUp mailPopUp={mailPopUp} product={product} handlePopUp={handlePopUp} />
                </Suspense>
            )}
            {redirectToError ? <Navigate to="/*" /> : false}
        </div>
    );
};

export default ProductCard;
