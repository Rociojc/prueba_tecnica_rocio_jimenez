import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ContentImgCart, ContentImgHome, HeaderStyle, Span } from '../../styles/layout/HeaderStyle';
import { UseContext } from '../context/UseContext';
import iconGroceryStore from '../../assets/grocery-store.svg';
import iconHome from '../../assets/ion_home.svg'

export const Header = () => {

  const navigate = useNavigate();

  const { productCart } = useContext(UseContext)

  const itemsQuanty = productCart.reduce((acc, item) => acc + item.count, 0)

  return (
    <HeaderStyle>
        <ContentImgHome onClick={() => navigate("/")}>
          <img style={{width: "100%"}} src={iconHome} alt="go-home" />
        </ContentImgHome>

        <ContentImgCart onClick={() => navigate("/shopping-cart")}>
            <img style={{width: "100%"}} src={iconGroceryStore} alt="grocery-store" />
            <Span>{itemsQuanty}</Span>
        </ContentImgCart>

    </HeaderStyle>
  )
}