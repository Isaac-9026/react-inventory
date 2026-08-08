import "./ProductForm.css";
import { useEffect, useState } from "react";
import { validarProducto } from "../../utils/productValidation";
import { mapProductToDatabase } from "../../utils/productMapper";
import useNotification from "../../hooks/useNotification";

const INITIAL_FORM = {
  nombre: "",
  marca: "",
  categoria: "",
  modelo: "",
  descripcion: "",
  precio: "",
  stock: "",
};

function ProductForm({
  onAgregarProducto,
  productEdicion,
  onEditarProducto,
  isSaving,
}) {
  const [formData, setFormData] = useState(INITIAL_FORM);

  const { success, error: notifyError } = useNotification();

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  useEffect(() => {
    if (productEdicion) {
      setFormData(productEdicion);
    } else {
      setFormData(INITIAL_FORM);
    }
  }, [productEdicion]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validarProducto(formData);

    if (validationError) {
      notifyError(validationError);
      return;
    }

    const product = mapProductToDatabase(formData);

    try {
      if (productEdicion) {
        await onEditarProducto(product);
        success("Producto actualizado correctamente");
      } else {
        await onAgregarProducto(product);
        success("Producto registrado correctamente");
      }

      setFormData(INITIAL_FORM);
    } catch (error) {
      console.error(error);
      notifyError("No se pudo guardar el producto");
    }
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

      <label htmlFor="categoria">Categoría</label>
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

      <button disabled={isSaving} type="submit">
        {isSaving ? "Guardando..." : productEdicion ? "Actualizar" : "Guardar"}
      </button>
    </form>
  );
}

export default ProductForm;
