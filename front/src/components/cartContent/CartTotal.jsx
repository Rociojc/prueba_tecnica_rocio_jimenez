import React, { useContext } from 'react'
import { UseContext } from '../context/UseContext'

export const CartTotal = () => {

    const { productCart } = useContext(UseContext);

    console.log(productCart, "total");

    const total = productCart.reduce((acc, item) => acc + item.product.price * item.count, 0);

  return (
    <div>{total}</div>
  )
}
