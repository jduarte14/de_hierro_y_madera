import { Swiper, SwiperSlide } from 'swiper/react';
import productos from './../js/productos'
import { Link } from 'react-router-dom';
import { Navigation } from 'swiper';

import 'swiper/css';

const ProductSwiper1 = () => {

  return (
    <div className="home-content">
      <Swiper spaceBetween={35}
          modules={[Navigation]}
          navigation
          breakpoints={{
            1920: {
              width: 1920,
              slidesPerView: 6,
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
        {

          productos.map((product) => {
            return <SwiperSlide key={product.id} >
              <div className="product-wrapper" >

                <div className="product-img">
                  <img src={product.img1} alt="" />

                </div>

                <div className="product-list">
                    <Link to={`/productos/${product.id}`}>
                      {product.title}
                    </Link>
                  <span>{product.previewDescription}</span>
                </div>
              </div>
            </SwiperSlide>


          }




          )
        }

      </Swiper>
    </div>
  )
}

export default ProductSwiper1;  