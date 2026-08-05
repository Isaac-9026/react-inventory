import { useState } from "react";
import { Toaster } from "sonner";
import "./App.css";
import ProductList from "./components/ProductList/ProductList";
import SearchBar from "./components/SearchBar/SearchBar";
import ProductForm from "./components/ProductForm/ProductForm";
import useProducts from "./hooks/useProducts";
import ConfirmDialog from "./components/ConfirmDialog/ConfirmDialog";

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
  const [productoAEliminar, setProductoAEliminar] = useState(null);

  const filteredProducts = products.filter((product) =>
    product.nombre.toLowerCase().includes(search.toLowerCase()),
  );

  const confirmarEliminacion = () => {
    eliminarProducto(productoAEliminar.id);
    setProductoAEliminar(null);
  };

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
        onSolicitarEliminar={setProductoAEliminar}
        onEditarProducto={editarProducto}
      />
      <ConfirmDialog
        open={productoAEliminar !== null}
        title="Eliminar producto"
        message={`¿Está seguro de eliminar "${productoAEliminar?.nombre}"?`}
        onCancel={() => setProductoAEliminar(null)}
        onConfirm={confirmarEliminacion}
      />
      <Toaster position="top-right" richColors closeButton />
    </main>
  );
}

export default App;
