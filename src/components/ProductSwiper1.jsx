import { Swiper, SwiperSlide } from 'swiper/react';
import productos from './../js/productos'
import { Link } from 'react-router-dom';
import { Navigation, Loop } from 'swiper';
import { getProductsByCategory } from './../js/productos';
import 'swiper/css';

const ProductSwiper1 = ({ categoriaPadre, product }) => {

  const filteredProducts = product.filter(
    (product) => product.categoriaPadre === categoriaPadre
  );
  console.log(filteredProducts);


  return (
    <div className="home-content">
      <div className="group_title">
        <h1>{categoriaPadre}</h1>
        <hr />
      </div>
      {
        filteredProducts ? <Swiper spaceBetween={35}
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


            }




            )
          }

        </Swiper> : ''
      }

    </div>
  )
}

export default ProductSwiper1;  