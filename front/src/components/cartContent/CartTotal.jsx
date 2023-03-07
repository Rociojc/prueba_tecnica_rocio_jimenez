import React, { useContext } from 'react'
import { ContentTotalStyle } from '../../styles/Cart/CartTotalStyle';
import { UseContext } from '../context/UseContext'

export const CartTotal = () => {

  const { productCart } = useContext(UseContext);

  const total = productCart.reduce((acc, item) => acc + item.product.price * item.count, 0).toFixed(2);

  return (
    <ContentTotalStyle>
      <h3>Purchase Summary</h3>
      <p>{total}</p>
    </ContentTotalStyle>
  )
}
