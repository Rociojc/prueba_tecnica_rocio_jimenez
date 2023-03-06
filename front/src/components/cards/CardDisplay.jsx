import React, { useContext, useEffect, useState } from 'react'
import { UseContext } from '../context/UseContext';

export const CardDisplay = ({product}) => {

    const {_id, name, image, description, price, countInStock } = product;
    const {productCart, addProductCart } = useContext(UseContext);

    
    // const reduceStock = (product) => {
    //     setInStock(inStock - 1)
    //     addProduct(product)
    // }

    // const addProduct = (product) => { 
    //   const productRepeat = productCart.find((item) => item.id === product.id);
    //   console.log(productRepeat);

    //   if (productRepeat) {
    //     setProductCart(productCart.map((item) => (item.id === product.id ? { ...product, count: productRepeat.count + 1} : item)))
    //   }else {
    //     setProductCart([...productCart, product])
    //   }        
    //     setInStock(inStock - 1)
    // }

    // const addProduct = (product) => {
    //   setProductCart((currItem) => {
    //     const isItemsFound = currItem.find((item) => item.id === product.id)
    //     if(isItemsFound) {
    //       currItem.map((item) => {
    //         if(item.id === product.id) {
    //           return {...item, count: item.count + 1}
    //         }else {
    //           return item;
    //         }
    //       })
    //     }else {
    //       return [...currItem, {_id, count: 1}]
    //     }
    //   })
    // }

    const calcularStock = (countInStock, _id) => {

      const foundId = productCart.find(item => item.product._id === _id)
      console.log(foundId, "foundId");

      if (foundId) {
        return countInStock - foundId.count
      }

      return countInStock;
    }

    const calStock = calcularStock(countInStock, _id)
    
  return (
    <section style={{display: "flex", flexDirection: "column", padding: "20px"}}>

      <h3>{name}</h3>
      <img style={{width: "100%"}} src={`http://localhost:5000${image}`} alt="imagen" />
      <p>{description}</p>
      <span>{price}</span>
      <h5>Stock: <span>{calStock === 0 ? "agotado" : calStock}</span> </h5>
      <button disabled={calStock === 0} onClick={() => addProductCart(product)}>{calStock === 0 ? "sin stock" :  "Add item to cart"}</button>
    </section>
  )
}
