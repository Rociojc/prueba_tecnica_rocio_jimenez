import React, { useContext } from 'react'
import { CartTotal } from '../components/cartContent/CartTotal';
import { UseContext } from '../components/context/UseContext'
import { CartProduct } from '../components/cartContent/CartProduct';
import { ContentCartStyle } from '../styles/page/CartStyle';

export const Cart = () => {

  const { productCart } = useContext(UseContext);

  return productCart.length > 0 ? (
    <ContentCartStyle>
    <div>
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
    </div>
    <CartTotal/>
    </ContentCartStyle>
  ) :
  (
    <h2>Your cart is empty</h2>
  )
}
