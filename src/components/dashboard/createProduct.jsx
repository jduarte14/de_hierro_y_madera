import React, { useEffect, useState, useRef, Suspense } from 'react';
import { Link } from "react-router-dom";
import { fetchData } from '../helpers/fetchHelper';


const EditProduct = () => {
    const WarnPopUp = React.lazy(() => import('./warnPopUp.jsx'));

    const [imageSrc1, setImageSrc1] = useState(null);
    const [imageSrc2, setImageSrc2] = useState(null);
    const [imageSrc3, setImageSrc3] = useState(null);
    const [popup, setPopUp] = useState(false);
    const [createdProduct, setCreatedProduct] = useState(false);

    //Nodes
    const nombreRef = useRef();
    const descripcionRef = useRef();
    const descripcionCortaRef = useRef();
    const categoriaPadreRef = useRef();
    const categoriaHijaRef = useRef();
    const imagenPrincipalRef = useRef();
    const imagenSecundariaRef = useRef();
    const imagenTerciariaRef = useRef();
    const caracteristicasRef = useRef();

    const handlePopUp = () => {
        popup ? setPopUp(false) : setPopUp(true);
    }

    const createFormData = () => {
        const formData = new FormData();
        formData.append("nombre", nombreRef.current.value);
        formData.append("descripcion", descripcionRef.current.value);
        formData.append("descripcionCorta", descripcionCortaRef.current.value);
        formData.append("categoriaPadre", categoriaPadreRef.current.value);
        formData.append("categoria", categoriaHijaRef.current.value);
        formData.append("imagen", imagenPrincipalRef.current.files[0]);
        formData.append("imagen2", imagenSecundariaRef.current.files[0]);
        formData.append("imagen3", imagenTerciariaRef.current.files[0]);
        formData.append("caracteristicas", caracteristicasRef.current.value);
        return formData;
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                switch (e.target.name) {
                    case 'imagen':
                        setImageSrc1(reader.result);
                        break;
                    case 'imagen2':
                        setImageSrc2(reader.result);
                        break;
                    case 'imagen3':
                        setImageSrc3(reader.result);
                        break;
                    default:
                        break;
                }
            }
            reader.readAsDataURL(file);
        }
    }

    new FileReader();

    const createProduct = async (e) => {
        e.preventDefault();
        try {
            const response = await fetchData(`https://dehierroymaderabackend-production.up.railway.app/api/products/`, 'POST', createFormData());
            if (response.status === 'success') {
                setPopUp(true);
                setCreatedProduct(true);
            }
            else {
                throw new Error("No se pudo actualizar el producto");
            }
        }
        catch (error) {
            throw new Error(error.message);
        }
    };

    return (
        <>
            <div className={createdProduct ? "completed-product dashboard-product-container" : "dashboard-product-container"}>
                <div className="dashboard-product-wrapper">
                    <div className="gallery-images">
                        {imageSrc1 && <img src={imageSrc1} alt="Vista previa 1" style={{ width: '300px' }} />}
                        {imageSrc2 && <img src={imageSrc2} alt="Vista previa 2" style={{ width: '300px' }} />}
                        {imageSrc3 && <img src={imageSrc3} alt="Vista previa 3" style={{ width: '300px' }} />}
                    </div>
                    <div className="form-row">
                        <label> Nombre del producto</label>
                        <input type="text" ref={nombreRef} required />
                    </div>
                    <div className="form-row">
                        <label> Descripcion </label>
                        <textarea type="text" ref={descripcionRef} required />
                    </div>
                    <div className="form-row">
                        <label>Descripcion corta </label>
                        <textarea type="text" ref={descripcionCortaRef} required />
                    </div>
                    <div className="form-row">
                        <label> Categoria </label>
                        <input type="text" ref={categoriaPadreRef} required />
                    </div>
                    <div className="form-row">
                        <label>Subcategoria </label>
                        <input type="text" ref={categoriaHijaRef} required />
                    </div>
                    <div className="form-row">
                        <label>Caracteristicas </label>
                        <textarea type="text" ref={caracteristicasRef} />
                    </div>
                    <div className="images-row">
                        <label> Imagenes </label>
                        <div className="preview-row">
                            <input type="file" name="imagen" onChange={(e) => handleImageChange(e)} ref={imagenPrincipalRef} />
                            {imageSrc1 && <img src={imageSrc1} alt="Vista previa 1" style={{ width: '60px' }} />}
                        </div>
                        <div className="preview-row">
                            <input type="file" name="imagen2" onChange={(e) => handleImageChange(e)} ref={imagenSecundariaRef} />
                            {imageSrc2 && <img src={imageSrc2} alt="Vista previa 2" style={{ width: '60px' }} />}
                        </div>

                        <div className="preview-row">
                            <input type="file" name="imagen3" onChange={(e) => handleImageChange(e)} ref={imagenTerciariaRef} />
                            {imageSrc3 && <img src={imageSrc3} alt="Vista previa 3" style={{ width: '60px' }} />}
                        </div>
                        {
                            createdProduct ? <b>El producto ha sido creado <Link to="/admin/catalog">Ir al catalogo</Link></b> : <b>*Vista previas de las imagenes cargadas en parte superior</b>
                        }
                    </div>
                    <div className="row-buttons">
                        <input type="submit" value="Crear producto" onClick={createProduct} />
                        <Link to="/admin/catalog">
                            Cancelar
                        </Link>
                    </div>


                </div>
            </div>
            {
                popup ?
                    <Suspense>
                        <WarnPopUp title="Se ha creado el producto" description="Puedes visualizarlo en el catalogo y el dashboard" passedFunction={handlePopUp} />
                    </Suspense>
                    : null
            }

        </>

    )
}

export default EditProduct;