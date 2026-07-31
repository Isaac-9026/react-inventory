import { useState } from "react";

function ProductForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    marca: "",
    categoria: "",
    modelo: "",
    descripcion: "",
    precio: "",
    stock: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };



  const handleSubmit = (e) => {
    e.preventDefault();

    const product = {
      ...formData,
      precio: parseFloat(formData.precio),
      stock: parseInt(formData.stock, 10),
    };

    console.log(product);
  };


  return (
    <form onSubmit={handleSubmit}>
      <h3>Registrar Nuevo Producto</h3>
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
      <button type="submit">Guardar</button>
    </form>
  );
}

export default ProductForm;
