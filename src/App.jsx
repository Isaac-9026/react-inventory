import { useState } from 'react'
import './App.css'
import ProductList from './components/ProductList/ProductList'
import products from './data/products'
import SearchBar from './components/SearchBar/SearchBar'

function App() {
  
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter(product =>
    product.nombre.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <main className='container-TodoApp'>
      <SearchBar
        value={search}
        onChange={setSearch}
      />
      <ProductList products = {filteredProducts}/>
    </main>
  )
}

export default App
