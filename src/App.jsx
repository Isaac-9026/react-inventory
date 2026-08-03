import { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList/ProductList";
import SearchBar from "./components/SearchBar/SearchBar";
import ProductForm from "./components/ProductForm/ProductForm";
import useProducts from "./hooks/useProducts";

function App() {
  const {
    products,
    productoEnEdicion,
    agregarProducto,
    eliminarProducto,
    editarProducto,
    actualizarProducto,
  } = useProducts();

  const [search, setSearch] = useState("");

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
