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

  const filteredProducts = products.filter((product) =>
    product.nombre.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <main className="container-TodoApp">
      <SearchBar value={search} onChange={setSearch} />
      <ProductForm onAgregarProducto={agregarProducto} />
      <ProductList products={filteredProducts} />
    </main>
  );
}

export default App;
