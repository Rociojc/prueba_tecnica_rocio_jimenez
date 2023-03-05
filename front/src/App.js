import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { MiniCart } from './components/MiniCart'
import { Cart } from './pages/Cart'
import { ProductDisplay } from './pages/ProductDisplay'
import { ProductList } from './pages/ProductList'

const App = () => {
  // -------------------------------------------------
  // DO NOT USE THE CODE BELOW FROM LINES 8 TO 18. THIS IS
  // HERE TO MAKE SURE THAT THE EXPRESS SERVER IS RUNNING
  // CORRECTLY. DELETE CODE WHEN COMPLETING YOUR TEST.
  const [response, setResponse] = useState('');
  const [ allProducts, setAllProducts ] = useState([]) // estos son los productos que ne añaden al carrito
  const [ total, setTotal ] = useState(0);
  const [ countProducts, setCountProducts ] = useState(0);

  // const addGrocery = () => {
  //   setTotal(total + 1)
  // }

  // call server to see if its running
  useEffect(() => {
    const getApiResponse = () => {
      fetch('http://localhost:5000/')
        .then((res) => res.text())
        .then((res) => setResponse(res))
    }
    getApiResponse()
  }, [])
  // -------------------------------------------------

  return (
    // <div style={{ textAlign: 'center' }}>
    //   <h1> Prueba tecnica front Ecomsur 2021</h1>
    //   <p>Borra esto y comienza aqui.</p>
    //   {/* Check to see if express server is running correctly */}
    //   <h5>{response}</h5>
    // </div>

    <>
      <Header allProducts={allProducts} setAllProducts={setAllProducts} total={setTotal} countProducts={setCountProducts}/>
      <Routes>
        <Route path='/' element={<ProductList allProducts={allProducts} setAllProducts={setAllProducts} total={setTotal} countProducts={setCountProducts}/>}/>
        <Route path='/products/:id' element={<ProductDisplay allProducts={allProducts} setAllProducts={setAllProducts} total={setTotal} countProducts={setCountProducts}/>}/>
        <Route path='/shopping-cart' element={<Cart/>}/>
        <Route path='/mini-cart' element={<MiniCart/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
