import { useEffect, useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList/ProductList";
import SearchBar from "./components/SearchBar/SearchBar";
import ProductForm from "./components/ProductForm/ProductForm";
import useProducts from "./hooks/useProducts";
import useNotification from "./hooks/useNotification";
import ConfirmDialog from "./components/ConfirmDialog/ConfirmDialog";
function App() {
  const {
    products,
    productoEnEdicion,
    agregarProducto,
    eliminarProducto,
    editarProducto,
    actualizarProducto,
    loadingAction,
    error,
  } = useProducts();

  const { success, error: notifyError } = useNotification();

  const [search, setSearch] = useState("");

  const [productoAEliminar, setProductoAEliminar] = useState(null);

  const searchTerm = search.toLowerCase().trim();

  const isLoading = loadingAction === "loading";

  const isSaving = loadingAction === "saving";

  const isDeleting = loadingAction === "deleting";

  const hasSearch = searchTerm !== "";
  useEffect(() => {
    if (error) {
      notifyError("No se pudieron cargar los productos");
    }
  }, [error, notifyError]);

  const filteredProducts = products.filter((product) => {
    const searchableText = [
      product.nombre,
      product.marca,
      product.categoria,
      product.modelo,
    ]
      .join(" ")
      .toLowerCase();
    return searchableText.includes(searchTerm);
  });

  const solicitarEliminar = (idProducto) => {
    const producto = products.find((product) => product.id === idProducto);
    setProductoAEliminar(producto);
  };

  const confirmarEliminacion = async () => {
    if (!productoAEliminar) return;

    try {
      await eliminarProducto(productoAEliminar.id);
      success("Producto eliminado correctamente");
      setProductoAEliminar(null);
    } catch (error) {
      console.error(error);
      notifyError("No se pudo eliminar el producto");
    }
  };

  return (
    <main className="container-TodoApp">
      <ProductForm
        onAgregarProducto={agregarProducto}
        productEdicion={productoEnEdicion}
        onEditarProducto={actualizarProducto}
        isSaving={isSaving}
      />

      <SearchBar value={search} onChange={setSearch} />

      <ProductList
        products={filteredProducts}
        isLoading={isLoading}
        hasSearch={hasSearch}
        onSolicitarEliminar={solicitarEliminar}
        onEditarProducto={editarProducto}
      />

      <ConfirmDialog
        open={productoAEliminar !== null}
        product={productoAEliminar}
        isDeleting={isDeleting}
        onCancel={() => setProductoAEliminar(null)}
        onConfirm={confirmarEliminacion}
      />
    </main>
  );
}

export default App;
