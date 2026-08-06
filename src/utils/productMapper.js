export function mapProductToDatabase(producto) {
  return {
    ...producto,
    precio: Number(producto.precio),
    stock: Number(producto.stock),
  };
}