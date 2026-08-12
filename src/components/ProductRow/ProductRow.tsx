import "./ProductRow.css";
import { Trash2, Pencil } from "lucide-react";
import type { Product } from "../../types/product";

interface ProductRowProps {
  product: Product;
  onSolicitarEliminar: (idProducto: string) => void;
  onEditarProducto: (producto: Product) => void;
}

function ProductRow({
  product,
  onSolicitarEliminar,
  onEditarProducto,
}: ProductRowProps) {
  return (
    <article className="product-row">
      <div className="product-info">
        <h3>{product.nombre}</h3>

        <p>
          <strong>Categoría:</strong> {product.categoria}
        </p>

        <p>
          <strong>Marca:</strong> {product.marca}
        </p>

        <p>
          <strong>Modelo:</strong> {product.modelo}
        </p>

        <p>
          <strong>Descripción:</strong> {product.descripcion}
        </p>

        <p>
          <strong>Precio:</strong> {product.precio}
        </p>

        <p>
          <strong>Stock:</strong> {product.stock}
        </p>
      </div>

      <div className="product-actions">
        <Pencil
          className="pencil-icon"
          onClick={() => onEditarProducto(product)}
          size={18}
        />

        <Trash2
          className="trash-icon"
          onClick={() => onSolicitarEliminar(product.id)}
          size={18}
        />
      </div>
    </article>
  );
}

export default ProductRow;
