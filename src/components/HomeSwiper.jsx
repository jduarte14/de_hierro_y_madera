import { Swiper, SwiperSlide } from 'swiper/react';
import swiper from '../breadcumbs/css/swiper.css'
import { Pagination, EffectFade } from 'swiper';


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
              <h1>Lorem ipsum dolor sit amet.</h1>
              <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ipsa ratione, dolores quasi sapiente id.</h4>
              <a className="btn-banner" href="">lorem arreder</a>
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