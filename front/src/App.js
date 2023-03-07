import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Header } from './components/layout/Header'
import { Cart } from './pages/Cart'
import { ProductDisplay } from './pages/ProductDisplay'
import { ProductList } from './pages/ProductList'

const App = () => {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<ProductList />}/>
        <Route path='/products/:id' element={<ProductDisplay />}/>
        <Route path='/shopping-cart' element={<Cart/>}/>
      </Routes>
    </>
  )
}

export default App
