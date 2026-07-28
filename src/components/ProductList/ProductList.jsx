import ProductRow from '../ProductRow/ProductRow'
import './ProductList.css'


function ProductList({ products }){
    console.log("Render ProductList")
    return(
        <div className="product-list">
        {products.map(product => (
            <ProductRow key= {product.id} product = {product}/>
        ))}
        </div>
    )
}

export default ProductList;