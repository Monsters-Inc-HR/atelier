import React from 'react';
import RelatedButton from './relatedButton.jsx';

const Card = ({product, compare, images}) => {

  console.log('images:', images);

  const handleClick = (e) => {
      compare();
  }

  return (

    <div className="related related-container-card" onClick={handleClick}>
     <div className='related related-container-card-top'>
        <RelatedButton/>
        <img alt="product-image"
        src={images ? images[0].url : "https://tinyurl.com/2utv43j5"} />
    </div>

      <p>{product.category}</p>
      <p>{product.name}</p>
      <p>${product.default_price}</p>
      <p>Stars</p>
    </div>

  )

}

// add on sale rendering feature
export default Card;
