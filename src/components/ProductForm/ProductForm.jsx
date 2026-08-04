import "./ProductForm.css";

import { useEffect, useState } from "react";
const INITIAL_FORM = {
  nombre: "",
  marca: "",
  categoria: "",
  modelo: "",
  descripcion: "",
  precio: "",
  stock: "",
};

function ProductForm({ onAgregarProducto, productEdicion, onEditarProducto }) {
  const [formData, setFormData] = useState(INITIAL_FORM);

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const validarFormulario = () => {
    if (!formData.nombre.trim()) {
      return "El nombre es obligatorio";
    }

    if (!formData.marca.trim()) {
      return "La marca es obligatoria";
    }

    if (!formData.categoria) {
      return "Seleccione una categoría";
    }

    if (!formData.precio || Number(formData.precio) <= 0) {
      return "El precio debe ser mayor a 0";
    }

    if (!formData.stock || Number(formData.stock) < 0) {
      return "El stock no puede ser negativo";
    }

    return null;
  };

  useEffect(() => {
    if (productEdicion) {
      setFormData(productEdicion);
    } else {
      setFormData(INITIAL_FORM);
    }
  }, [productEdicion]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const error = validarFormulario();

    if (error) {
      alert(error);
      return;
    }

    const product = {
      ...formData,
      precio: parseFloat(formData.precio),
      stock: parseInt(formData.stock, 10),
    };

    if (productEdicion) {
      onEditarProducto(product);
    } else {
      onAgregarProducto(product);
    }

    setFormData(INITIAL_FORM);
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h3>{productEdicion ? "Editar Producto" : "Registrar Nuevo Producto"}</h3>
      <label htmlFor="nombre">Nombre</label>
      <input
        id="nombre"
        type="text"
        placeholder="Ingrese el nombre"
        value={formData.nombre}
        onChange={handleChange}
      />

      <label htmlFor="marca">Marca</label>
      <input
        id="marca"
        type="text"
        placeholder="Ingrese la marca"
        value={formData.marca}
        onChange={handleChange}
      />

      <label htmlFor="categoria">Categoria</label>
      <select id="categoria" value={formData.categoria} onChange={handleChange}>
        <option value="">Seleccione una categoría</option>
        <option value="laptop">Laptop</option>
        <option value="monitor">Monitor</option>
        <option value="mouse">Mouse</option>
        <option value="teclado">Teclado</option>
      </select>

      <label htmlFor="modelo">Modelo</label>
      <input
        id="modelo"
        type="text"
        placeholder="Ingrese el modelo"
        value={formData.modelo}
        onChange={handleChange}
      />

      <label htmlFor="descripcion">Descripción</label>
      <textarea
        id="descripcion"
        placeholder="Ingrese la descripcion"
        value={formData.descripcion}
        onChange={handleChange}
      />

      <label htmlFor="precio">Precio</label>
      <input
        id="precio"
        type="number"
        placeholder="Ingrese el precio"
        value={formData.precio}
        onChange={handleChange}
      />

      <label htmlFor="stock">Stock</label>
      <input
        id="stock"
        type="number"
        placeholder="Ingrese el stock disponible"
        value={formData.stock}
        onChange={handleChange}
      />
      <button type="submit">{productEdicion ? "Actualizar" : "Guardar"}</button>
    </form>
  );
}

export default ProductForm;
