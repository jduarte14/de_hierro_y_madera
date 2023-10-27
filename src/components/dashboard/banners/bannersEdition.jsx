import React, { useEffect, useState, useRef, Suspense } from 'react';
import { useParams, Link } from "react-router-dom";
import { fetchData } from '../../helpers/fetchHelper';
import { CgSpinnerTwoAlt } from 'react-icons/cg';
import { create } from 'react-test-renderer';

const BannersEdition = () => {

    const WarnPopUp = React.lazy(() => import('./../warnPopUp.jsx'));

    const [popup, setPopUp] = useState(false);
    const [popUpOperation, setPopUpOperation] = useState('');
    const [updatedData, setUpdatedData] = useState(false);
    const [deletedData, setDeletedData] = useState(false);
    const [singleBanner, setSingleBanner] = useState();
    const [mobileImage, setMobileImage] = useState();
    const [desktopImage, setDesktopImage] = useState();
    const { id } = useParams();
    const bannerDescriptionRef = useRef();
    const bannerNameRef = useRef();
    const bannerSubTitleRef = useRef();
    const bannerTitleRef = useRef();
    const desktopImageRef = useRef();
    const mobileImageRef = useRef();
    const typeRef = useRef();
    const bannerLinkRef = useRef();
    const bannerLinkTextRef = useRef();

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
        typeRef.current.value ?
        formData.append("type", typeRef.current.value) :
        formData.append("type", singleBanner.type);
        formData.append("title", bannerTitleRef.current.value);
        formData.append("subtitle", bannerSubTitleRef.current.value);
        formData.append("description", bannerDescriptionRef.current.value);
        formData.append("link", bannerLinkRef.current.value);
        formData.append("link_text", bannerLinkTextRef.current.value);
        desktopImageRef.current.value ?
            formData.append("desktop_image", mobileImageRef.current.value) :
            formData.append("desktop_image", singleBanner.desktop_image);
        mobileImageRef.current.value ? formData.append("desktop_mobile", desktopImageRef.current.value) :
            formData.append("desktop_mobile", singleBanner.mobile_image);
        return formData;

    }



    const getBanner = async () => {
        try {
            const response = await fetchData(`https://dehierroymaderabackend-production.up.railway.app/api/banners/${id}`, 'GET', null);
            if (response.status === 'success') {
                setSingleBanner(response.banner);
            }
            else {
                throw new Error("No se ha podido conseguir el banner");
            }
        }
        catch (error) {
            throw new Error(error.message);
        }

    }

    const deleteBanner = async () => {
        try {
            const response = await fetchData(`https://dehierroymaderabackend-production.up.railway.app/api/banners/${id}`, 'DELETE', null);
            if (response.status === 'success') {
                setPopUp(false);
                setDeletedData(true);
            }
        }
        catch (error) {
            throw new Error("No se pudo eliminar el banner;")
        }
    }

    const patchData = async () => {
        try {
            const response = await fetchData(`https://dehierroymaderabackend-production.up.railway.app/api/banners/${id}`, 'PATCH', createFormData())
            if (response.status === "success") {
                setPopUpOperation("PATCH");
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

    const handleProps = (type) => {
        if (type === 'PATCH') {
            return {
                title: 'El banner se ha editado',
                description: 'Puedes visualizar los cambios en el catalogo o el dashboard',
                passedFunction: handlePopUp,
            }

        } else if (type === 'DELETE') {
            return {
                title: 'Eliminar banner',
                description: 'Estas seguro/a que quieres eliminar el producto?',
                cancelButton: true,
                passedFunction: deleteBanner,
                closeFunction: handlePopUp
            }
        }
    }
    const previousDelete = () => {
        setPopUpOperation('DELETE');
        handlePopUp();
    }


    useEffect(() => {
        getBanner();
    }, [])

    return (
        <div className={updatedData ? 'completed-product dashboard-product-container' : 'dashboard-product-container'}>
            <div className="dashboard-banner-wrapper">
                {
                    singleBanner ?
                        <>
                            <h3>Imagenes sin modificar:</h3>
                            <div className="gallery-images">
                                <figure>
                                    <img src={singleBanner.desktop_image} alt="" />
                                </figure>
                                <figure>
                                    <img src={singleBanner.mobile_image} alt="" />
                                </figure>
                            </div>
                            <div className="form-row">
                                <label> Nombre del banner</label>
                                <input defaultValue={singleBanner.name} type="text" ref={bannerNameRef} />
                            </div>
                            <div className="form-row">
                                <label> Descripcion </label>
                                <textarea defaultValue={singleBanner.description} type="text" ref={bannerDescriptionRef} />
                            </div>
                            <div className="form-row">
                                <label> Titulo del banner</label>
                                <input defaultValue={singleBanner.title} type="text" ref={bannerTitleRef} />
                            </div>
                            <div className="form-row">
                                <label> Subtitulo del banner</label>
                                <input defaultValue={singleBanner.subtitle} type="text" ref={bannerSubTitleRef} />
                            </div>
                            <div className="form-row">
                                <label> Link del banner (direccion)</label>
                                <input defaultValue={singleBanner.link} type="text" ref={bannerLinkRef} />
                            </div>
                            <div className="form-row">
                                <label> Nombre del link</label>
                                <input defaultValue={singleBanner.link_text} type="text" ref={bannerLinkTextRef} />
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
                                    deletedData ? <b>El producto ha sido eliminado <Link to="/admin/catalog/banners">Ir al catalogo</Link></b> : <b>*Debe seleccionar la imagen que desea agregar o modificar.</b>
                                }
                                {
                                    updatedData ? <b> Se ha modificado el producto puede ir al catalogo a visualizarlo o editarlo nuevamente <Link to="/admin/catalog/banners">Ir al catalogo</Link></b> : null
                                }

                            </div>
                            <div className="row-buttons">
                                <input type="submit" value="Editar banner" onClick={patchData} />
                                <input type="submit" className="yellow-btn" value="Eliminar banner" onClick={previousDelete} />
                                <Link to="/admin/catalog/banners">
                                    Cancelar
                                </Link>
                            </div>

                        </> : (
                            <div className="spinner">
                                <CgSpinnerTwoAlt />
                            </div>
                        )
                }
            </div>
            {
                popup ? (
                    <Suspense>
                        <WarnPopUp {...handleProps(popUpOperation)} />
                    </Suspense>
                ) : null
            }
        </div>
    )
}

export default BannersEdition;