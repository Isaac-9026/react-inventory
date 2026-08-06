export function validarProducto(producto) {
  if (!producto.nombre.trim()) {
    return "El nombre es obligatorio";
  }

  if (!producto.marca.trim()) {
    return "La marca es obligatoria";
  }

  if (!producto.categoria) {
    return "Seleccione una categoría";
  }

  if (!producto.precio || Number(producto.precio) <= 0) {
    return "El precio debe ser mayor a 0";
  }

  if (producto.stock === "" || Number(producto.stock) < 0) {
    return "El stock no puede ser negativo";
  }

  return null;
}