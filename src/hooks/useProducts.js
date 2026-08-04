import { useState, useEffect } from "react";
import productsData from "../data/products";
import { obtenerProductos, guardarProductos } from "../services/productStorage";

function useProducts() {
  const [productoEnEdicion, setProductoEnEdicion] = useState(null);

  const [products, setProducts] = useState(obtenerProductos);

  useEffect(() => {
    guardarProductos(products);
  }, [products]);

  const agregarProducto = (nuevoProducto) => {
    const productWithId = {
      id: crypto.randomUUID(),
      ...nuevoProducto,
    };

    setProducts((prev) => [...prev, productWithId]);
  };

  const eliminarProducto = (idProducto) => {
    setProducts((prev) => prev.filter((product) => product.id !== idProducto));
  };

  const editarProducto = (producto) => {
    setProductoEnEdicion(producto);
  };

  const actualizarProducto = (productoActualizado) => {
    setProducts((prev) =>
      prev.map((producto) =>
        producto.id === productoActualizado.id ? productoActualizado : producto,
      ),
    );
    setProductoEnEdicion(null);
  };

  return {
    products,
    productoEnEdicion,
    agregarProducto,
    eliminarProducto,
    editarProducto,
    actualizarProducto,
  };
}

export default useProducts;
