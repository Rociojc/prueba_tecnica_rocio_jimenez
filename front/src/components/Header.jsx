import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import iconGroceryStore from '../assets/grocery-store.svg';
import { FigureStyle, HeaderStyle, Span } from '../styles/HeaderStyle';
import { UseContext } from './context/UseContext';

export const Header = ({allProducts, setAllProducts}) => {

  const [ active, setActive ] = useState(false)
  const navigate = useNavigate();

  const { productCart } = useContext(UseContext)

  const itemsQuanty = productCart.reduce((acc, item) => acc + item.count, 0)

  return (
    <HeaderStyle>
        <FigureStyle onClick={() => navigate("/shopping-cart")}>
            <img style={{width: "100%"}} src={iconGroceryStore} alt="grocery-store" />
            <Span>{itemsQuanty}</Span>
        </FigureStyle>
    </HeaderStyle>
  )
}
