import { useNavigate } from 'react-router-dom';
import { ArticleStyle, ImgCardStyle } from '../../styles/card/CardStyle';

export const Card = ({id, image, name, category, brand, price, rating, numReviews}) => {

    const navigate = useNavigate();

  return (
    <ArticleStyle onClick={() => navigate(`/products/${id}`)}>
      <ImgCardStyle style={{width: "100%"}} src={`http://localhost:5000${image}`} alt={name} />
      <h3>{name}</h3>
      <p>{category}</p>
      <p>{brand}</p>
      <span>{price}</span>
      <p>Reviews: {numReviews}</p>
      <p>⭐{rating}</p>
    </ArticleStyle>

  )
}
