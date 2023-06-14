import React, { useState, useRef, useEffect } from "react";
import { fetchData } from "../helpers/fetchHelper";

const DashboardCatalog = ({ productData }) => {
  const [edit, setEdit] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [updatedProduct, setUpdatedProduct] = useState(productData);

  const nombreRef = useRef();
  const descripcionRef = useRef();
  const descripcionCortaRef = useRef();
  const categoriaPadreRef = useRef();
  const categoriaHijaRef = useRef();
  const imagenPrincipalRef = useRef();
  const imagenSecundariaRef = useRef();
  const imagenTerciariaRef = useRef();
  const caracteristicasRef = useRef();

  const createData = async (e) => { 
    e.preventDefault();
    const createUrl = `https://dehierroymaderabackend-production.up.railway.app/api/products/`;
    const formData = new FormData();
    formData.append("nombre", nombreRef.current.value);
    formData.append("descripcion", descripcionRef.current.value);
    formData.append("descripcionCorta", descripcionCortaRef.current.value);
    formData.append("categoriaPadre", categoriaPadreRef.current.value);
    formData.append("categoria", categoriaHijaRef.current.value);
    formData.append("caracteristicas", caracteristicasRef.current.value);
    formData.append("imagen", imagenPrincipalRef.current.files[0]);
    formData.append("imagen2", imagenSecundariaRef.current.files[0]);
    formData.append("imagen3", imagenTerciariaRef.current.files[0]);
    try {
      const response = await fetchData(createUrl, "POST", formData);
      alert(response.message);
      window.location.reload();
    }
    catch (error) {
      throw new Error(error.message);
    }
  }

  const putData = async (e) => {
    e.preventDefault();

    const PutUrl = `https://dehierroymaderabackend-production.up.railway.app/api/products/${selectedProduct._id}`;
    const formData = new FormData();
    formData.append("nombre", nombreRef.current.value);
    formData.append("descripcion", descripcionRef.current.value);
    formData.append("descripcionCorta", descripcionCortaRef.current.value);
    formData.append("categoriaPadre", categoriaPadreRef.current.value);
    formData.append("categoria", categoriaHijaRef.current.value);
    formData.append("imagen", imagenPrincipalRef.current.files[0]);
    formData.append("imagen2", imagenSecundariaRef.current.files[0]);
    formData.append("imagen3", imagenTerciariaRef.current.files[0]);

    if (selectedProduct.caracteristicas) {
      formData.append("caracteristicas", caracteristicasRef.current.value);
    }

    try {
      const response = await fetchData(PutUrl, "PUT", formData);
      alert(response.message);
      closeEdit();
      window.location.reload();
    }

    catch (error) {
      throw new Error(error.message);
    }
  };


  const deleteData = async (id) => {
    const deleteUrl = `https://dehierroymaderabackend-production.up.railway.app/api/products/${id}`;
    try {
      const response = await fetchData(deleteUrl, "DELETE");
      alert(response.message);
      window.location.reload();
    }

    catch (error) {
      throw new Error(error.message);
    }
   }

  const handleEdit = (producto) => {
    setSelectedProduct(producto);
    setEdit(true);
  };

  const closeEdit = () => {
    setEdit(false);
  };

  useEffect(() => {
    setUpdatedProduct(productData);
  }, [productData]);

  return (
    <div className="dashboard-wrapper">
      <div className="product-dashboard-container">
        {updatedProduct.map((producto) => (
          <div className="product-dashboard" key={producto._id} category={producto.categoria}>
            <img src={producto.imagen} alt="img-product" />
            <div className="catalog-info">
              <b className="title">{producto.nombre}</b>
              <span>{producto.descripcionCorta}</span>
              <div className="button-row">
                <button onClick={() => handleEdit(producto)}>Editar producto</button>
                <button onClick={()=>deleteData(producto._id)}>Eliminar producto</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="form-create">
        <div className="form-container">
          <form onSubmit={createData}> 
            <h2>Crear producto</h2>
            <input type="text" placeholder="nombre de producto" name="nombre"  ref={nombreRef} required />
            <textarea placeholder="descripcion" name="descripcion"  ref={descripcionRef} required/>
            <input type="text" placeholder="descripcion corta" name="descripcionCorta" ref={descripcionCortaRef} required/>
            <input type="text" placeholder="categoria padre" name="categoriaPadre" ref={categoriaPadreRef} required/>
            <input type="text" placeholder="categoria hija" name="categoria" ref={categoriaHijaRef} required/>
            <input type="text" placeholder="caracteristicas" required name="caracteristicas" ref={caracteristicasRef} />
            <b>Imagen principal: (obligatoria)</b>
            <input type="file" placeholder="agrega imagen primaria" name="imagen" required ref={imagenPrincipalRef} />
            <b>Imagen secundaria</b>
            <input type="file" placeholder="agrega imagen secundaria" name="imagen2" ref={imagenSecundariaRef} />
            <b>Imagen tercearia</b>
            <input type="file" placeholder="agrega imagen terciaria" name="imagen3" ref={imagenTerciariaRef} />
            <input type="submit" id="btnEnviar" value="Crear producto" />
          </form>
        </div>
      </div>
      {edit && (
        <div className="edit-popup">
          <form onSubmit={putData}>
            <h2>Editar producto</h2>
            <p>Al editar un producto debe agregar sus imagenes nuevamente</p>
            <b>Nombre</b>
            <input type="text" placeholder="nombre de producto" name="nombre" defaultValue={selectedProduct.nombre} ref={nombreRef} required />
            <b>Descripcion</b>
            <textarea placeholder="descripcion" name="descripcion" defaultValue={selectedProduct.descripcion} ref={descripcionRef} required />
            <b>Descripcion corta</b>
            <input type="text" placeholder="descripcion corta" name="descripcionCorta" defaultValue={selectedProduct.descripcionCorta} ref={descripcionCortaRef} required />
            <b>Categoria</b>
            <input type="text" placeholder="categoria padre" name="categoriaPadre" defaultValue={selectedProduct.categoriaPadre} required ref={categoriaPadreRef} />
            <b>Categoria hija</b>
            <input type="text" placeholder="categoria hija" name="categoria" defaultValue={selectedProduct.categoria} ref={categoriaHijaRef} required />
            {selectedProduct.caracteristicas ? (
              <input type="text" placeholder="caracteristicas" name="caracteristicas" ref={caracteristicasRef} defaultValue={selectedProduct.caracteristicas} />
            ) : null}
            <b>Imagen principal:</b>
            <input type="file" ref={imagenPrincipalRef} name="imagen" />
            <b>Imagen secundaria</b>
            <input type="file" ref={imagenSecundariaRef} name="imagen2" />
            <b>Imagen tercearia</b>
            <input type="file" ref={imagenTerciariaRef} name="imagen3" />
            <input type="submit" id="btnEnviar" value="Editar producto" />
          </form>
          <div className="popup-overlay" onClick={closeEdit} />
        </div>
      )}
    </div>
  );
};

export default DashboardCatalog;
