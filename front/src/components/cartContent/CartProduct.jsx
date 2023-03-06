import React, { useContext } from 'react'
import { UseContext } from '../context/UseContext';
import { CartItemCounter } from './CartItemCounter'

export const CartProduct = ({image, brand, name, price, count, product}) => {

const { addProductCart, reduceProductCart, productCart, setProductCart, deleteProduct } = useContext(UseContext);

  return (
    <div style={{display: "flex", padding: "20px"}}>
        <img style={{width: "100%"}} src={`http://localhost:5000${image}`} alt="imagen" />
        <h4>{brand}</h4>
        <h3>{name}</h3>
        <div>
            <button onClick={() => reduceProductCart()}>-</button>
            <span>{count}</span>
            <button onClick={() => addProductCart(product)}>+</button>
        </div>
        {/* <CartItemCounter/> */}
        <span>{price * count}</span>
        <button onClick={() => deleteProduct(product)}>❌</button>
    </div>
  )
}
