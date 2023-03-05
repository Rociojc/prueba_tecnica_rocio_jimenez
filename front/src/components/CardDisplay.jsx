import React, { useContext, useEffect, useState } from 'react'
import { UseContext } from './context/UseContext';

export const CardDisplay = ({product}) => {

    const { name, image, description, price, countInStock: stock } = product;
    const { productCart, setProductCart } = useContext(UseContext);

    const [ inStock, setInStock ] = useState(stock);
    
    // const reduceStock = (product) => {
    //     setInStock(inStock - 1)
    //     addProduct(product)
    // }

    const addProduct = (product) => {
        console.log(product);
        setProductCart([...productCart, product])
        setInStock(inStock - 1)
    }
    
  return (
    <section style={{display: "flex", flexDirection: "column", padding: "20px"}}>
      <h3>{name}</h3>
      <img style={{width: "100%"}} src={`http://localhost:5000${image}`} alt="imagen" />
      <p>{description}</p>
      <span>{price}</span>
      <h5>Stock: <span>{inStock === 0 ? "agotado" : inStock}</span> </h5>
      <button disabled={inStock === 0} onClick={() => addProduct(product)}>{inStock === 0 ? "sin stock" :  "Add item to cart"}</button>
    </section>
  )
}
