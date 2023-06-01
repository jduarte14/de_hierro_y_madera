import { Swiper, SwiperSlide } from 'swiper/react';
import swiper from '../breadcumbs/css/swiper.css'
import { Pagination, EffectFade } from 'swiper';
import {Link} from 'react-router-dom';

//Swiper CSS
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css';
// Icons
import { FaWhatsapp } from 'react-icons/fa';
import imgBanner from "./../img/principal-banner.jpg"
import imgBannerMobile from "./../img/mobile-banner.jpg"
const HomeSwiper = () => {
  return (
    <div className="principal-swiper">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        modules={[Pagination, EffectFade]}
        pagination
        effect="fade"


      >
        <SwiperSlide>
          <div className="principal-banner">
            <div className="info">
              <h1>Muebles de Diseño Industrial</h1>
              <h4>Combinando Funcionalidad y Estilo en Armonía</h4>
              <p>Descubre nuestra exclusiva colección de productos de diseño industrial, 
                donde la funcionalidad se encuentra con un estilo distintivo.</p>
              <Link to="/catalogo" className="btn-banner">Visitar Catalogo</Link>
            </div>
            <img className="img-contianer desktop" src={imgBanner} alt="" />
            <img className="img-container mobile" src={imgBannerMobile} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeSwiper;