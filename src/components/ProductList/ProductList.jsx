import ProductRow from '../ProductRow/ProductRow'
import './ProductList.css'


function ProductList({ products, onSolicitarEliminar, onEditarProducto }){
    
    return(
        <div className="product-list">
        {products.map(product => (
            <ProductRow key= {product.id} product = {product} onSolicitarEliminar= {onSolicitarEliminar} onEditarProducto={onEditarProducto}/>
        ))}
        </div>
    )
}

export default ProductList;