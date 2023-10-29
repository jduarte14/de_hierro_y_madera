import React, { useEffect, useState, useRef, Suspense } from 'react';
import { useParams, Link } from "react-router-dom";
import { fetchData } from '../../helpers/fetchHelper';
import { CgSpinnerTwoAlt } from 'react-icons/cg';

const BannersCreation = () => {

    const WarnPopUp = React.lazy(() => import('../warnPopUp.jsx'));
    const BannerGuide = React.lazy(() => import('../bannerGuide.jsx'));

    const [popup, setPopUp] = useState(false);
    const [bannerGuide, setBannerGuide] = useState(false);
    const [popUpOperation, setPopUpOperation] = useState(false);
    const [updatedData, setUpdatedData] = useState(false);
    const [mobileImage, setMobileImage] = useState();
    const [desktopImage, setDesktopImage] = useState();
    const bannerDescriptionRef = useRef();
    const bannerNameRef = useRef();
    const bannerSubTitleRef = useRef();
    const bannerTitleRef = useRef();
    const desktopImageRef = useRef();
    const mobileImageRef = useRef();
    const typeRef = useRef();
    const bannerLinkRef = useRef();
    const bannerLinkTextRef = useRef();

    const handleBannerGuide = () => {
        bannerGuide ? setBannerGuide(false) :
            setBannerGuide(true);
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                switch (e.target.name) {
                    case 'image_desktop':
                        setDesktopImage(reader.result);
                        break;
                    case 'image_mobile':
                        setMobileImage(reader.result);
                        break;
                    default:
                        break;
                }
            }
            reader.readAsDataURL(file);
        }
    }

    new FileReader();

    const createFormData = () => {
        const formData = new FormData();
        formData.append("name", bannerNameRef.current.value);
        formData.append("type", typeRef.current.value)
        formData.append("title", bannerTitleRef.current.value);
        formData.append("subtitle", bannerSubTitleRef.current.value);
        formData.append("description", bannerDescriptionRef.current.value);
        formData.append("link", bannerLinkRef.current.value);
        formData.append("link_text", bannerLinkTextRef.current.value);
        formData.append("desktop_image", desktopImageRef.current.files[0]);
        formData.append("desktop_mobile", mobileImageRef.current.files[0]);
        return formData;

    }

    const createData = async () => {
        try {
            const response = await fetchData(`https://dehierroymaderabackend-production.up.railway.app/api/banners`, 'POST', createFormData())
            if (response.status === "success") {
                setPopUpOperation(true);
                setPopUp(true);
                setUpdatedData(true);
            }
            else {
                throw new Error("Hubo un error en la peticion");
            }
        }
        catch (error) {
            throw new Error(error.message);
        }
    }

    const handlePopUp = () => {
        popup ? setPopUp(false) : setPopUp(true);
    }

    const handleProps = () => {
        return {
            title: 'El banner se ha creado',
            description: 'Puedes visualizar los cambios en el catalogo o el dashboard',
            passedFunction: handlePopUp,
        }
    }
    return (
        <div className={updatedData ? 'completed-product dashboard-product-container' : 'dashboard-product-container'}>
            <div className="dashboard-banner-wrapper">
                <>
                    <div className="gallery-images">
                        <figure>
                            {
                                mobileImage ? <img src={mobileImage} alt="" /> : null
                            }
                        </figure>
                        <figure>
                            {
                                desktopImage ? <img src={desktopImage} alt="" /> : null
                            }
                        </figure>
                    </div>
                    <div className="form-row">
                        <label> Nombre del banner</label>
                        <input type="text" ref={bannerNameRef} />
                    </div>
                    <div className="form-row">
                        <label> Descripcion </label>
                        <textarea type="text" ref={bannerDescriptionRef} />
                    </div>
                    <div className="form-row">
                        <label> Titulo del banner</label>
                        <input type="text" ref={bannerTitleRef} />
                    </div>
                    <div className="form-row">
                        <label> Subtitulo del banner</label>
                        <input type="text" ref={bannerSubTitleRef} />
                    </div>
                    <div className="form-row">
                        <label> Link del banner (direccion)</label>
                        <input type="text" ref={bannerLinkRef} />
                    </div>
                    <div className="form-row">
                        <label> Nombre del link</label>
                        <input type="text" ref={bannerLinkTextRef} />
                    </div>
                    <div className="form-row">
                        <label> Tipo o ubicacion del banner</label>
                        <select name="" id="" ref={typeRef}>
                            <option value="principal_banner">
                                principal_banner
                            </option>
                            <option value="category_banner">
                                category_banner
                            </option>
                        </select>
                    </div>

                    <div className="images-row">
                        <label> Imagenes </label>
                        <b>Imagen desktop:</b>
                        <input type="file" name="image_desktop" ref={desktopImageRef} onChange={(e) => { handleImageChange(e) }} />
                        {desktopImage && <img src={desktopImage} alt="Vista previa 1" style={{ width: '60px' }} />}
                        <b>Imagen mobile:</b>
                        {mobileImage && <img src={mobileImage} alt="Vista previa 1" style={{ width: '60px' }} />}
                        <input type="file" name="image_mobile" defaultValue={mobileImage} ref={mobileImageRef} onChange={(e) => { handleImageChange(e) }} />
                        {
                            updatedData ? <b> Se ha creado el producto puede ir al catalogo a visualizarlo o editarlo nuevamente <Link to="/admin/catalog/banners">Ir al catalogo</Link></b> : null
                        }

                    </div>
                    <div className="row-buttons">
                        <button onClick={handleBannerGuide}>Ver guia de banners</button>
                        <input type="submit" value="Crear banner" onClick={createData} />
                        <Link to="/admin/catalog/banners">
                            Cancelar
                        </Link>
                    </div>

                </>
            </div>
            {
                popup ? (
                    <Suspense>
                        <WarnPopUp {...handleProps(popUpOperation)} />
                    </Suspense>
                ) : null
            }
            {
                bannerGuide ? (
                    <Suspense>
                        <BannerGuide closeFunction={handleBannerGuide} />
                    </Suspense>
                ) : null
            }
        </div>
    )
}

export default BannersCreation;