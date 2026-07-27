import ProductRow from '../ProductRow/ProductRow'


function ProductList({ products }){

    return(
        products.map(product => (
            <ProductRow key= {product.id} product = {product}/>
        ))
    )
}

export default ProductList;