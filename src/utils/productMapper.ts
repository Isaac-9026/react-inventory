import type { CreateProductData, ProductFormData } from "../types/product";

export function mapProductToDatabase(
  producto: ProductFormData,
): CreateProductData {
  return {
    ...producto,
    precio: Number(producto.precio),
    stock: Number(producto.stock),
  };
}
