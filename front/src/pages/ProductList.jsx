import React, { useContext, useEffect } from 'react'
import { Card } from '../components/cards/Card'
import { UseContext } from '../components/context/UseContext';
import { getProducts } from '../services/Products';
import { SectionListStyle } from '../styles/page/ProductListStyle';

export const ProductList = () => {

  const { dataProducts, setDataProducts } = useContext(UseContext)

  useEffect(() => {
    getProducts(setDataProducts);
}, [])

  return (
    <main>
      <SectionListStyle>
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
            rating={product.rating}
            numReviews={product.numReviews}
          />
            )
        }
      </SectionListStyle>
    </main>
  )
}
