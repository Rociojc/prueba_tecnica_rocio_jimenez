import React, { useContext } from 'react'
import { AddProdCartStyle, ArticleCartStyle, ButtonCartProdStyle, ButtonDeleteStyle, ImgCartStyle, NameProdCartStyle, PriceProdCartStyle } from '../../styles/Cart/CartProductStyle';
import { UseContext } from '../context/UseContext';
import iconDelete from '../../assets/icon_delete.svg'

export const CartProduct = ({image, brand, name, price, count, product}) => {

const { addProductCart, reduceProductCart, deleteProduct } = useContext(UseContext);

  return (
    <ArticleCartStyle>
        <ImgCartStyle style={{width: "100%"}} src={`http://localhost:5000${image}`} alt="image_product" />
        <h4>{brand}</h4>
        <NameProdCartStyle>{name}</NameProdCartStyle>
        <AddProdCartStyle>
            <ButtonCartProdStyle onClick={() => reduceProductCart()}>-</ButtonCartProdStyle>
            <span>{count}</span>
            <ButtonCartProdStyle onClick={() => addProductCart(product)}>+</ButtonCartProdStyle>
        </AddProdCartStyle>
        <PriceProdCartStyle>{(price * count).toFixed(2)}</PriceProdCartStyle>
        <ButtonDeleteStyle onClick={() => deleteProduct(product)}>
          <img style={{width: "100%"}} src={iconDelete} alt="delete-product" />
        </ButtonDeleteStyle>
    </ArticleCartStyle>
  )
}
