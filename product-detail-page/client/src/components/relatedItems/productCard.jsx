import React from 'react';
import RelatedButton from './relatedButton.jsx';

const Card = ({product, compare}) => {

  const handleClick = (e) => {
      compare();
  }

  return (

    <div className="related related-container-card">
    <RelatedButton/>
    <div onClick={handleClick}>
    <img alt="product-image"/>
      <p>{product.category}</p>
      <p>{product.name}</p>
      <p>${product.default_price}</p>
      <p>Stars</p>
    </div>
       </div>

  )

}

export default Card;
