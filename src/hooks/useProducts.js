import { useState, useEffect } from "react";
import productService from "../services/productService";

function useProducts() {
  const [productoEnEdicion, setProductoEnEdicion] = useState(null);
  const [loadingAction, setLoadingAction] = useState("loading");
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  const agregarProducto = async (nuevoProducto) => {
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

  const eliminarProducto = async (idProducto) => {
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

  const editarProducto = (producto) => {
    setProductoEnEdicion(producto);
  };

  const actualizarProducto = async (producto) => {
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
