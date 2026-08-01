import { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList/ProductList";
import SearchBar from "./components/SearchBar/SearchBar";
import ProductForm from "./components/ProductForm/ProductForm";
import productsData from "./data/products";

function App() {
  const [products, setProducts] = useState(productsData);
  const [search, setSearch] = useState("");

  const agregarProducto = (nuevoProducto) => {
    const productWithId = {
      id: crypto.randomUUID(),
      ...nuevoProducto,
    };

    setProducts((prev) => [...prev, productWithId]);
  };

  const eliminarProducto = (idProducto) => {
    setProducts( (prev) => prev.filter((product) => product.id !== idProducto));
  };

  const filteredProducts = products.filter((product) =>
    product.nombre.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <main className="container-TodoApp">
      <ProductForm onAgregarProducto={agregarProducto} />
      <SearchBar value={search} onChange={setSearch} />
      <ProductList products={filteredProducts} onEliminarProducto={eliminarProducto} />
    </main>
  );
}

export default App;
