function ProductRow ({ product }) {

    return(
        <>
            <h3>{product.nombre}</h3>
            <p>Categoria: {product.categoria}</p>
            <p>Marca: {product.marca}</p>
            <p>Precio: {product.precio}</p>
            <p>Stock: {product.stock}</p>
        </>
            
    )
}


export default ProductRow;