import React, { useContext } from 'react'
import { CartTotal } from '../components/cartContent/CartTotal';
import { UseContext } from '../components/context/UseContext'
import { CartProduct } from '../components/cartContent/CartProduct';

export const Cart = () => {

    const { productCart, setProductCart } = useContext(UseContext);

    

  return productCart.length > 0 ? (
    <>
    {
      productCart.map(item => {
      return(
        <CartProduct
          key={item.product._id}
          image={item.product.image}
          brand={item.product.brand}
          name={item.product.name}
          count={item.count}
          price={item.product.price}
          product={item.product}
          _id={item.product._id}
        />
      )
      })
    }
    <CartTotal/>
    </>
  ) :
  (
    <h2>Your cart is empty</h2>
  )
}
