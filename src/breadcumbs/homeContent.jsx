import HomeSwiper from '../components/HomeSwiper'
import CategorySwiper from '../components/CategorySwiper';
import ProductSwiper1 from '../components/ProductSwiper1';
import Middlebanners from '../components/MiddleBanners';
import home from './css/home.css';


const HomeContent = () => {

    return (
        <>
            <HomeSwiper />
            <div className="home-wrapper">
                <Middlebanners />
                <CategorySwiper />
                <ProductSwiper1 />
                <div className="banner">
                <img src="https://dummyimage.com/1700x400/000/fff" alt="" />
                <ProductSwiper1 />
                </div>
            </div>

        </>
    )

}





export default HomeContent;