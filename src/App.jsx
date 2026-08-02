import { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList/ProductList";
import SearchBar from "./components/SearchBar/SearchBar";
import ProductForm from "./components/ProductForm/ProductForm";
import productsData from "./data/products";

function App() {
  const [products, setProducts] = useState(productsData);
  const [search, setSearch] = useState("");
  const [productoEnEdicion, setProductoEnEdicion] = useState(null);

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

  const filteredProducts = products.filter((product) =>
    product.nombre.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <main className="container-TodoApp">
      <ProductForm
        onAgregarProducto={agregarProducto}
        productEdicion={productoEnEdicion}
        onEditarProducto={actualizarProducto}
      />
      <SearchBar value={search} onChange={setSearch} />
      <ProductList
        products={filteredProducts}
        onEliminarProducto={eliminarProducto}
        onEditarProducto={editarProducto}
      />
    </main>
  );
}

export default App;
