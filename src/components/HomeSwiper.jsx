import { Swiper, SwiperSlide } from 'swiper/react';
import swiper from '../breadcumbs/css/swiper.css'
import { Pagination, EffectFade, Autoplay } from 'swiper';
import { Link } from 'react-router-dom';


//Swiper CSS
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css';
const HomeSwiper = ({ banner, bannerData }) => {
  return (
    <div className="principal-swiper">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        modules={[Pagination, EffectFade, Autoplay]}
        pagination
        effect="fade"
        loop={true}
        autoplay={true}


      >
        
        {
          banner ? banner.map(banner => {
            
            return banner.type ==="principal_banner" ? <SwiperSlide>
              <div className="principal-banner" key={banner._id}>
                <div className="info">
                  <h1>{banner.title}</h1>
                  <h4>{banner.subtitle}</h4>
                    <p>{banner.description}</p>
                  <Link to={banner.link} className="btn-banner">{banner.link_text}</Link>
                </div>
                <img className="img-container desktop" src={banner.desktop_image} alt="" />
                <img className="img-container mobile" src={banner.mobile_image} alt="" />
              </div>
            </SwiperSlide> : null
          }) : null
        }

      </Swiper>
    </div>
  );
};

export default HomeSwiper;