import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { Navigation, Loop } from 'swiper';

import 'swiper/css';

const ProductSwiper1 = ({ categoriaPadre, product, customTitle }) => {

  const [loading, setLoading] = useState(true);
  console.log(categoriaPadre,'el title')

  const filteredProducts = product.filter(
    (product) => product.categoriaPadre === categoriaPadre
  );

  useEffect(() => {
    if (filteredProducts.length > 0) {
      setLoading(false);
    }
  }, [filteredProducts]);
  return (
    <div className="home-content">
      <div className="group_title">
        {
          customTitle ? <h2 className="card-title">{categoriaPadre} que te pueden interesar </h2> : <h1>{categoriaPadre}</h1>
        }
        
        <hr />
      </div>

      {
        filteredProducts && !loading ? <Swiper spaceBetween={35}
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
                  <Link to={`/productos/${product._id}`}>
                    <div className="product-img">
                      <img src={product.imagen} alt="" />

                    </div>

                    <div className="product-list">
                      <b className="title" >
                        {product.nombre}
                      </b>
                      <span>{product.descripcionCorta}</span>
                    </div>

                  </Link>
                </div>
              </SwiperSlide>
            })
          }

        </Swiper> : <div className="skeleton_row">
          <div className="skeleton"></div>
          <div className="skeleton"></div>
          <div className="skeleton"></div>
          <div className="skeleton"></div>
        </div>
      }
    </div>
  )
}

export default ProductSwiper1;  