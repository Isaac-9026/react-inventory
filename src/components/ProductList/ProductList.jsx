import ProductRow from "../ProductRow/ProductRow";
import Loader from "../Loader/Loader";
import "./ProductList.css";

function ProductList({
  products,
  onSolicitarEliminar,
  onEditarProducto,
  isLoading,
}) {
  if (isLoading) {
    return <Loader message="Cargando productos..." />;
  }

  if (products.length === 0) {
    return <p>No hay productos registrados</p>;
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductRow
          key={product.id}
          product={product}
          onSolicitarEliminar={onSolicitarEliminar}
          onEditarProducto={onEditarProducto}
        />
      ))}
    </div>
  );
}

export default ProductList;
