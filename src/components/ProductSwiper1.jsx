import { Swiper, SwiperSlide } from 'swiper/react';
import productos from './../js/productos'
import { Link } from 'react-router-dom';
import { Navigation, Loop } from 'swiper';
import { getProductsByCategory } from './../js/productos';
import 'swiper/css';

const ProductSwiper1 = ({ categoriaPadre }) => {

  const filteredProducts = getProductsByCategory(categoriaPadre);

  return (
    <div className="home-content">
      <div className="group_title">
        <h1>{categoriaPadre}</h1>
        <hr />
      </div>

      <Swiper spaceBetween={35}
        modules={[Navigation]}
        navigation
        loop
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

          filteredProducts.map((product) => {
            return <SwiperSlide key={product.id} >
              <div className="product-wrapper" >
                <Link to={`/productos/${product.id}`}>
                  <div className="product-img">
                    <img src={product.img1} alt="" />

                  </div>

                  <div className="product-list">
                    <b className="title" >
                      {product.title}
                    </b>
                    <span>{product.previewDescription}</span>
                  </div>

                </Link>
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