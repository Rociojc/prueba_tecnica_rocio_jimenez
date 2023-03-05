import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import iconGroceryStore from '../assets/grocery-store.svg';
import { FigureStyle, HeaderStyle, Span } from '../styles/HeaderStyle';

export const Header = ({allProducts, setAllProducts}) => {

  const [ active, setActive ] = useState(false)
  const navigate = useNavigate();

  // const goCart = () => {
  //   if(allProducts.length) {
  //     navigate("/shopping-cart")
  //   }else {
  //     alert("no hay productos")
  //   }
  // }

  return (
    <HeaderStyle>
        <FigureStyle onClick={() => navigate("/shopping-cart")}>
            <img style={{width: "100%"}} src={iconGroceryStore} alt="grocery-store" />
            <Span>0</Span>
        </FigureStyle>
    </HeaderStyle>
  )
}
