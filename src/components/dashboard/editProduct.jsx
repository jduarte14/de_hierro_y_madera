import { useEffect, useState, useRef } from 'react';
import { useParams, Navigate, Link } from "react-router-dom";
import { fetchData } from '../helpers/fetchHelper';
const EditProduct = () => {
    const [product, setProduct] = useState();
    const { id } = useParams();

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
            if (response.success === true) {
                console.log(response);
                alert(response.message);
            }
            else {
                throw new Error("No se pudo actualizar el producto");
            }
        }
        catch (error) {
            throw new Error(error.message);
        }
    };

    const deleteData = async (e) => {
        e.preventDefault();
        try {
            const response = await fetchData(`https://dehierroymaderabackend-production.up.railway.app/api/products/${id}`, 'DELETE', null);
            if (response) {
                alert(response.message);
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
            <div className="dashboard-product-container">
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
                                    <b>*Debe seleccionar la imagen que desea agregar o modificar.</b>
                                </div>
                                <div className="row-buttons">
                                    <input type="submit" value="Editar producto" onClick={putData} />
                                    <input type="submit" className="yellow-btn" value="Eliminar articulo" onClick={deleteData} />
                                    <Link to="/admin/catalog">
                                        Cancelar
                                    </Link>
                                </div>
                            </> : null
                    }

                </div>
            </div>
        )
    }

    export default EditProduct;