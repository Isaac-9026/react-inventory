import ProductRow from "../ProductRow/ProductRow";
import "./ProductList.css";

function ProductList({ products, onSolicitarEliminar, onEditarProducto }) {
  return (
    <section className="product-list">
      {products.map((product) => (
        <ProductRow
          key={product.id}
          product={product}
          onSolicitarEliminar={onSolicitarEliminar}
          onEditarProducto={onEditarProducto}
        />
      ))}
    </section>
  );
}

export default ProductList;
