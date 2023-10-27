import { Link } from 'react-router-dom';
import { RiEdit2Fill } from 'react-icons/ri';
import { useOwnerContext } from './../../../context/ownerContext';
import './css/banners.css';


const BannersDashboard = () => {
    const { bannerData, setBannerData } = useOwnerContext();

    return (
        <main className="banner_wrapper">
            <section className="banner_list">
                <div className="banner_row">
                    <h1>Lista de banners</h1>
                    <Link to="/admin/catalog/banners/create" className="create_banner">Crear banner</Link>
                </div>
                {
                    bannerData ?
                        bannerData.map(banner => {
                            return <div className="banner_actions" key={banner._id}>
                                <b>{banner.title}</b>
                                <p>{banner.type}</p>
                                <figure className='banner_miniature'>
                                    <img src={banner.desktop_image} alt="" />
                                </figure>
                                <div className="buttons_actions">
                                    <Link to={`/admin/catalog/banners/edit/${banner._id}`} className="banner_edit"><RiEdit2Fill /> Modificar</Link>
                                </div>
                            </div>
                        })
                        : null
                }
            </section>
        </main>
    )
}

export default BannersDashboard;