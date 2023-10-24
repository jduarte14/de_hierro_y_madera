import HomeSwiper from '../components/HomeSwiper'
import CategorySwiper from '../components/CategorySwiper';
import ProductSwiper1 from '../components/ProductSwiper1';
import './css/home.css';
import {useContext} from 'react';
import { useOwnerContext } from '../context/ownerContext';

const HomeContent = ({productData}) => {

    const {bannerData, setBannerData} = useOwnerContext();
    return (
        <>
            <HomeSwiper banner={bannerData} setBanner={setBannerData} />
            <div className="home-wrapper">
                <CategorySwiper />
                <ProductSwiper1 product={productData} categoriaPadre="muebles" />
                <ProductSwiper1 product={productData} categoriaPadre="luminaria"/>
            </div>

        </>
    )

}





export default HomeContent;