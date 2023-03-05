import React, { useContext } from 'react'
import { Card } from '../components/Card';
import { UseContext } from '../components/context/UseContext'

export const Cart = () => {

    const { productCart, setProductCart } = useContext(UseContext);
  return (
    productCart.map(product => {
        return(
            <Card
            key={product._id}
            id = {product._id}
            image={product.image}
            name={product.name}
            category={product.category}
            brand={product.brand}
          />
        )
    })
  )
}
