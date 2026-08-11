import { useEffect, useState } from "react";
import productService from "../services/productService";
import type { CreateProductData, Product } from "../types/product";

type LoadingAction = "loading" | "saving" | "deleting" | null;

function useProducts() {
  const [productoEnEdicion, setProductoEnEdicion] = useState<Product | null>(
    null,
  );

  const [loadingAction, setLoadingAction] = useState<LoadingAction>("loading");

  const [products, setProducts] = useState<Product[]>([]);

  const [error, setError] = useState<unknown>(null);

  const agregarProducto = async (nuevoProducto: CreateProductData) => {
    setLoadingAction("saving");

    try {
      const productoCreado = await productService.createProduct(nuevoProducto);

      setProducts((prev) => [...prev, productoCreado]);

      return productoCreado;
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      setLoadingAction(null);
    }
  };

  const cargarProductos = async () => {
    setLoadingAction("loading");
    setError(null);

    try {
      const productos = await productService.getProducts();

      setProducts(productos);

      return productos;
    } catch (error) {
      console.error(error);
      setError(error);
      throw error;
    } finally {
      setLoadingAction(null);
    }
  };

  const eliminarProducto = async (idProducto: string) => {
    setLoadingAction("deleting");

    try {
      await productService.deleteProduct(idProducto);

      setProducts((prev) =>
        prev.filter((producto) => producto.id !== idProducto),
      );
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      setLoadingAction(null);
    }
  };

  useEffect(() => {
    cargarProductos().catch(() => {});
  }, []);

  const editarProducto = (producto: Product) => {
    setProductoEnEdicion(producto);
  };

  const actualizarProducto = async (producto: Product) => {
    setLoadingAction("saving");

    try {
      const productoActualizado = await productService.updateProduct(producto);

      setProducts((prev) =>
        prev.map((p) =>
          p.id === productoActualizado.id ? productoActualizado : p,
        ),
      );

      setProductoEnEdicion(null);

      return productoActualizado;
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      setLoadingAction(null);
    }
  };

  return {
    products,
    productoEnEdicion,
    loadingAction,
    error,
    agregarProducto,
    eliminarProducto,
    editarProducto,
    actualizarProducto,
  };
}

export default useProducts;
