import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { CardDisplay } from '../components/cards/CardDisplay';
import { UseContext } from '../components/context/UseContext';
import { getProductById } from '../services/Products';

export const ProductDisplay = () => {

  const { product, setProduct } = useContext(UseContext)
  const { id } = useParams();

  //llamado al API Asincrono
  //1. Delay del API (Mensaje de cargando)
  //2. Un posible error (fase II)
  //3. El dato correcto

  useEffect(() => {
    getProductById(id, setProduct)
  }, [id])

  //Crear un componente bonito de cargando
  if(product == null) return <h1>Cargando...</h1>;

  // const addProduct = (product) => {
  //   console.log(product);
  // }

  return (
    <>
      <CardDisplay
        product={product}
      />
    </>
  )
}
