function ProductForm() {
  return (
    <form>
      <h3>Registrar Nuevo Producto</h3>
      <label htmlFor="nombre">Nombre</label>
      <input id="nombre" type="text" placeholder="Ingrese el nombre" />

      <label htmlFor="marca">Marca</label>
      <input id="marca" type="text" placeholder="Ingrese la marca" />

      <label htmlFor="categoria">Categoria</label>
      <select id="categoria">
        <option value="">Seleccione una categoría</option>
        <option value="laptop">Laptop</option>
        <option value="monitor">Monitor</option>
        <option value="mouse">Mouse</option>
        <option value="teclado">Teclado</option>
      </select>

      <label htmlFor="modelo">Modelo</label>
      <input id="modelo" type="text" placeholder="Ingrese el modelo" />

      <label htmlFor="descripcion">Descripción</label>
      <textarea id="descripcion" placeholder="Ingrese la descripcion" />

      <label htmlFor="precio">Precio</label>
      <input id="precio" type="number" placeholder="Ingrese el precio" />

      <label htmlFor="stock">Stock</label>
      <input
        id="stock"
        type="number"
        placeholder="Ingrese el stock disponible"
      />
      <button type="submit">Guardar</button>
    </form>
  );
}

export default ProductForm;
