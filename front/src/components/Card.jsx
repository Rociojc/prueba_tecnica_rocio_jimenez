import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Card = ({id, image, name, category, brand, price}) => {

    const navigate = useNavigate();

  return (
    <article onClick={() => navigate(`/products/${id}`)} style={{border: "1px solid black", width: "300px", margin: "auto"}}>
      <img style={{width: "100%"}} src={`http://localhost:5000${image}`} alt={name} />
      <h3>{name}</h3>
      <p>{category}</p>
      <p>{brand}</p>
      <span>{price}</span>
    </article>

  )
}
