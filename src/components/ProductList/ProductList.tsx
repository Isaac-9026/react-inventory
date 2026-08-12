import ProductRow from "../ProductRow/ProductRow";
import "./ProductList.css";
import type { Product } from "../../types/product";

interface ProductListProps {
  products: Product[];
  isLoading: boolean;
  hasSearch: boolean;
  onSolicitarEliminar: (idProducto: string) => void;
  onEditarProducto: (producto: Product) => void;
}

function ProductList({
  products,
  isLoading,
  hasSearch,
  onSolicitarEliminar,
  onEditarProducto,
}: ProductListProps) {
  if (isLoading) {
    return (
      <section className="product-list-status">
        <p>Cargando productos...</p>
      </section>
    );
  }

  if (products.length === 0) {
    return (
      <section className="product-list-status">
        <p>
          {hasSearch
            ? "No se encontraron productos."
            : "No hay productos registrados."}
        </p>
      </section>
    );
  }

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
