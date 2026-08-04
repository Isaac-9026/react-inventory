import productsData from "../data/products";

const STORAGE_KEY = "products";

export function obtenerProductos() {
  const productosGuardados = localStorage.getItem(STORAGE_KEY);

  if (!productosGuardados) {
    return productsData;
  }

  return JSON.parse(productosGuardados);
}

export function guardarProductos(products) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
}