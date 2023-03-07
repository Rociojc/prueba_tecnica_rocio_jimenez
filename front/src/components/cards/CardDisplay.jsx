import React, { useContext } from 'react'
import { ButtonAdd, ImgDisplay, SectionDisplay } from '../../styles/card/CardDisplayStyle';
import { UseContext } from '../context/UseContext';

export const CardDisplay = ({product}) => {

    const {_id, name, image, description, price, countInStock } = product;
    const {productCart, addProductCart } = useContext(UseContext);

    const calcularStock = (countInStock, _id) => {

      const foundId = productCart.find(item => item.product._id === _id)

      if (foundId) {
        return countInStock - foundId.count
      }

      return countInStock;
    }

    const calStock = calcularStock(countInStock, _id)
    
  return (
    <SectionDisplay>
      <h3>{name}</h3>
      <ImgDisplay style={{width: "100%"}} src={`http://localhost:5000${image}`} alt="imagen" />
      <p>{description}</p>
      <span>{price}</span>
      <h5>Stock: <span>{calStock === 0 ? "out stock" : calStock}</span> </h5>
      <ButtonAdd disabled={calStock === 0} onClick={() => addProductCart(product)}>{calStock === 0 ? "Out of stock" :  "Add item to cart"}</ButtonAdd>
    </SectionDisplay>
  )
}
