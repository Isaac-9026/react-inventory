import ProductRow from '../ProductRow/ProductRow'
import './ProductList.css'


function ProductList({ products, onEliminarProducto, onEditarProducto }){
    
    return(
        <div className="product-list">
        {products.map(product => (
            <ProductRow key= {product.id} product = {product} onEliminarProducto= {onEliminarProducto} onEditarProducto={onEditarProducto}/>
        ))}
        </div>
    )
}

export default ProductList;