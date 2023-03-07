import React, { useContext, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { CardDisplay } from '../components/cards/CardDisplay';
import { UseContext } from '../components/context/UseContext';
import { getProductById } from '../services/Products';

export const ProductDisplay = () => {

  const { product, setProduct } = useContext(UseContext)
  const { id } = useParams();

  useEffect(() => {
    getProductById(id, setProduct)
  }, [id])

  if(product == null) return <h1>Cargando...</h1>;

  return (
    <>
      <CardDisplay
        product={product}
      />
    </>
  )
}
