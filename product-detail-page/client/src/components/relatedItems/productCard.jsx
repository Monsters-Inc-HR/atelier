import React from 'react';
import RelatedButton from './relatedButton.jsx';

const Card = ({product}) => {

  return (

    <div className="related related-container-card">
    <RelatedButton/>
    <img alt="product-image"/>
      <p>{product.category}</p>
      <p>{product.name}</p>
      <p>${product.default_price}</p>
      <p>Stars</p>
    </div>

  )

}

export default Card;
