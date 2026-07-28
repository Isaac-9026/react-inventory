import './ProductRow.css'

function ProductRow ({ product }) {

    console.log("Renderizando ProductRow");
    return(
        <article className="product-row">
            <h3>{product.nombre}</h3>
            <p>Categoria: {product.categoria}</p>
            <p>Marca: {product.marca}</p>
            <p>Precio: {product.precio}</p>
            <p>Stock: {product.stock}</p>
        </article>
            
    )
}


export default ProductRow;