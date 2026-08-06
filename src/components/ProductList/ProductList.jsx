import ProductRow from "../ProductRow/ProductRow";
import "./ProductList.css";

function ProductList({
  products,
  onSolicitarEliminar,
  onEditarProducto,
  isLoading,
}) {
  if (isLoading) {
    return <p>Cargando productos...</p>;
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
