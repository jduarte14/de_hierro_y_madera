import HomeSwiper from '../components/HomeSwiper'
import CategorySwiper from '../components/CategorySwiper';
import ProductSwiper1 from '../components/ProductSwiper1';
import './css/home.css';

const HomeContent = () => {

    return (
        <>
            <HomeSwiper />
            <div className="home-wrapper">
                <CategorySwiper />
                <ProductSwiper1 categoriaPadre="muebles"/>
                <div className="banner">
                <img src="https://dummyimage.com/1700x400/000/fff" alt="" />
                <ProductSwiper1  categoriaPadre="diseño"/>
                </div>
            </div>

        </>
    )

}





export default HomeContent;