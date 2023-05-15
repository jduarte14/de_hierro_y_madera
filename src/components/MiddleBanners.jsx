import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import middleImg from './../img/techado-middle-2.jpg'
import 'swiper/css';
import 'swiper/css/navigation';

const MiddleBanners = () => {
    return (
        <Swiper spaceBetween={25}
            modules={[Navigation]}
            navigation
            
            breakpoints={{
                1024: {
                    width:1024,
                    slidesPerView: 2
                },
                640: {
                    width: 640,
                    slidesPerView: 2,
                },
                320: {
                    width: 320,
                    slidesPerView: 1.5,
                },
            }}
        >
            <SwiperSlide>
                <div className="middle-banner">
                    <img src={middleImg} alt="" />
                    <div className="middle-info">
                        <span>Techos </span>
                        <a href="/">Ver mas</a>
                    </div>

                </div>


            </SwiperSlide>
            <SwiperSlide>

            <div className="middle-banner">
                    <img src={middleImg} alt="" />
                    <div className="middle-info">
                        <span>Techos </span>
                        <a href="/">Ver mas</a>
                    </div>

                </div>

            </SwiperSlide>


        </Swiper>
    );
};

export default MiddleBanners;  