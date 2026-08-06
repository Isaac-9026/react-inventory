import { useState, useEffect } from "react";
import productService from "../services/productService";
import { toast } from "sonner";

function useProducts() {
  const [productoEnEdicion, setProductoEnEdicion] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const agregarProducto = async (nuevoProducto) => {
    setIsLoading(true);

    try {
      const productoCreado = await productService.createProduct(nuevoProducto);

      setProducts((prev) => [...prev, productoCreado]);

      toast.success("Producto registrado correctamente");
    } catch (error) {
      console.error(error);
      toast.error("No se pudo registrar el producto");
    } finally {
      setIsLoading(false);
    }
  };

  const cargarProductos = async () => {
    setIsLoading(true);

    try {
      const productos = await productService.getProducts();

      setProducts(productos);
    } catch (error) {
      console.error(error);
      toast.error("No se pudieron cargar los productos");
    } finally {
      setIsLoading(false);
    }
  };

  const eliminarProducto = async (idProducto) => {
    setIsLoading(true);

    try {
      await productService.deleteProduct(idProducto);

      setProducts((prev) =>
        prev.filter((producto) => producto.id !== idProducto),
      );

      toast.success("Producto eliminado correctamente");
    } catch (error) {
      console.error(error);
      toast.error("No se pudo eliminar el producto");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  const editarProducto = (producto) => {
    setProductoEnEdicion(producto);
  };

  const actualizarProducto = async (producto) => {
    setIsLoading(true);

    try {
      const productoActualizado = await productService.updateProduct(producto);

      setProducts((prev) =>
        prev.map((p) =>
          p.id === productoActualizado.id ? productoActualizado : p,
        ),
      );

      setProductoEnEdicion(null);

      toast.success("Producto actualizado correctamente");
    } catch (error) {
      console.error(error);
      toast.error("No se pudo actualizar el producto");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    products,
    productoEnEdicion,
    isLoading,
    agregarProducto,
    eliminarProducto,
    editarProducto,
    actualizarProducto,
  };
}

export default useProducts;
