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
                <ProductSwiper1  categoriaPadre="diseño"/>
            </div>

        </>
    )

}





export default HomeContent;