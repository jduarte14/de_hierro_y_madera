import React, { useEffect, useState, useRef, Suspense } from 'react';
import { useParams, Link } from "react-router-dom";
import { fetchData } from '../helpers/fetchHelper';
import { CgSpinnerTwoAlt } from 'react-icons/cg';

const EditProduct = () => {

    const WarnPopUp = React.lazy(() => import('./warnPopUp.jsx'));

    const [popup, setPopUp] = useState(false);
    const [popUpOperation, setPopUpOperation] = useState('');
    const [product, setProduct] = useState();
    const [deletedData, setDeletedData] = useState(false);
    const [editedData, setEditedData] = useState(false);

    const { id } = useParams();

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

    const handleProps = (type) => {
        if (type === 'PUT') {
            return {
                title: 'El producto se ha editado',
                description: 'Puedes visualizar los cambios en el catalogo o el dashboard',
                passedFunction: handlePopUp,
            }

        } else if (type === 'DELETE') {
            return {
                title: 'Eliminar producto',
                description: 'Estas seguro/a que quieres eliminar el producto?',
                cancelButton: true,
                passedFunction: deleteData,
                closeFunction: handlePopUp
            }
        }
    }

    const getProductData = async () => {
        try {
            const response = await fetchData(`https://dehierroymaderabackend-production.up.railway.app/api/products/${id}`, 'GET', null);
            if (response.status === "success") {
                const { product } = response;
                setProduct(product);
            }
            else {
                throw new Error("No se pudo obtener los datos");
            }
        }
        catch (error) {
            throw new Error(error.message);
        }
    }

    const putData = async (e) => {
        e.preventDefault();
        try {
            const response = await fetchData(`https://dehierroymaderabackend-production.up.railway.app/api/products/${id}`, 'PUT', createFormData());
            if (response.status === 'success') {
                setPopUpOperation('PUT');
                handleProps();
                handlePopUp();
                setEditedData(true);
            }
            else {
                throw new Error("No se pudo actualizar el producto");
            }
        }
        catch (error) {
            throw new Error(error.message);
        }
    };

    const previousDelete = () => {
        setPopUpOperation('DELETE');
        handlePopUp();
    }

    const deleteData = async (e) => {
        e.preventDefault();
        try {
            const response = await fetchData(`https://dehierroymaderabackend-production.up.railway.app/api/products/${id}`, 'DELETE', null);
            if (response.status === 'success') {
                setPopUp(false);
                setDeletedData(true);
            }
            else {
                throw new Error("No se pudo actualizar el producto");
            }
        }
        catch (error) {
            throw new Error(error.message);
        }

    }
    useEffect(() => {
        getProductData();
    }, [])

    return (
        <div className={deletedData ? 'completed-product dashboard-product-container' : 'dashboard-product-container'}>
            <div className="dashboard-product-wrapper">
                {
                    product ?
                        <>
                            <div className="gallery-images">
                                {
                                    product.imagen ? <img src={product.imagen} /> : null
                                }
                                {
                                    product.imagen2 ? <img src={product.imagen2} /> : null
                                }
                                {
                                    product.imagen3 ? <img src={product.imagen3} /> : null
                                }
                            </div>
                            <div className="form-row">
                                <label> Nombre del producto</label>
                                <input type="text" defaultValue={product.nombre} ref={nombreRef} />
                            </div>
                            <div className="form-row">
                                <label> Descripcion </label>
                                <textarea type="text" defaultValue={product.descripcion} ref={descripcionRef} />
                            </div>
                            <div className="form-row">
                                <label>Descripcion corta </label>
                                <textarea type="text" defaultValue={product.descripcionCorta} ref={descripcionCortaRef} />
                            </div>
                            <div className="form-row">
                                <label> Categoria </label>
                                <input type="text" defaultValue={product.categoriaPadre} ref={categoriaPadreRef} />
                            </div>
                            <div className="form-row">
                                <label>Subcategoria </label>
                                <input type="text" defaultValue={product.categoria} ref={categoriaHijaRef} />
                            </div>
                            <div className="form-row">
                                <label>Caracteristicas </label>
                                <textarea type="text" defaultValue={product.caracteristicas} ref={caracteristicasRef} />
                            </div>
                            <div className="images-row">
                                <label> Imagenes </label>
                                <input type="file" name="imagen" ref={imagenPrincipalRef} />
                                <input type="file" name="imagen2" ref={imagenSecundariaRef} />
                                <input type="file" name="imagen3" ref={imagenTerciariaRef} />
                                {
                                    deletedData ? <b>El producto ha sido eliminado <Link to="/admin/catalog">Ir al catalogo</Link></b> : <b>*Debe seleccionar la imagen que desea agregar o modificar.</b>
                                }
                                {
                                    editedData ? <b> Se ha modificado el producto puede ir al catalogo a visualizarlo o editarlo nuevamente <Link to="/admin/catalog">Ir al catalogo</Link></b> : null
                                }

                            </div>
                            <div className="row-buttons">
                                <input type="submit" value="Editar producto" onClick={putData} />
                                <input type="submit" className="yellow-btn" value="Eliminar articulo" onClick={previousDelete} />
                                <Link to="/admin/catalog">
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

export default EditProduct;