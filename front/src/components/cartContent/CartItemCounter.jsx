import React, { useContext } from 'react'
import { UseContext } from '../context/UseContext'

export const CartItemCounter = () => {
    const { quantyCart, setQuantyCart } = useContext(UseContext);

  return (
    <>
        <button>-</button>
        <span>{quantyCart}</span>
        <button>+</button>
    </>
  )
}
