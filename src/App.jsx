import './App.css'
import ProductList from './components/ProductList/ProductList'
import products from './data/products'

function App() {
  
  return (
    <main className='container-TodoApp'>
      <ProductList products = {products}/>
    </main>
  )
}

export default App
