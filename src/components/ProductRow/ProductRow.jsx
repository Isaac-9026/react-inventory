import "./ProductRow.css";
import { Trash2 } from "lucide-react";

function ProductRow({ product, onEliminarProducto }) {

  return (
    <article className="product-row">
      <div className="product-info">
        <h3>{product.nombre}</h3> 
        <p>Categoria: {product.categoria}</p>
        <p>Marca: {product.marca}</p>
        <p>Modelo: {product.modelo}</p>
        <p>Descripción: {product.descripcion}</p>
        <p>Precio: {product.precio}</p>
        <p>Stock: {product.stock}</p>
      </div>
      <Trash2 className="trash-icon" onClick={() => onEliminarProducto(product.id)} size={20} />
    </article>  
  );
}

export default ProductRow;
