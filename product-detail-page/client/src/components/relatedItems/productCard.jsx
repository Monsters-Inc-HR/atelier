import React from 'react';
import RelatedButton from './relatedButton.jsx';

const Card = ({product, compare, images, salePrice}) => {

  // console.log('images:', images);
  // console.log('sale prices:', salePrices)
  // console.log('product', product);

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
      {salePrice ? <><p className="on-sale">${salePrice}</p> <p style={{textDecoration: 'line-through'}}>${product.default_price}</p></> : <p>${product.default_price}</p>}
      <p>Stars</p>
    </div>

  )

}

// add on sale rendering feature
export default Card;
