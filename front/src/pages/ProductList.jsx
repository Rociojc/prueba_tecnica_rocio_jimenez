import React, { useContext, useEffect, useState } from 'react'
import { Card } from '../components/Card'
import { UseContext } from '../components/context/UseContext';
import { getProducts } from '../services/Products';

export const ProductList = () => {

  const { dataProducts, setDataProducts } = useContext(UseContext)

  useEffect(() => {
    getProducts(setDataProducts);
}, [])

  return (
    <main>
      <section style={{padding: "20px"}}>
      {
        dataProducts.map(product => 
          <Card
            key={product._id}
            id = {product._id}
            image={product.image}
            name={product.name}
            category={product.category}
            brand={product.brand}
            price={product.price}
          />
            )
        }
      </section>
    </main>
  )
}
