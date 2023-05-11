import React from 'react';
import RelatedButton from './relatedButton.jsx';

const Card = ({product, compare, images, salePrice}) => {


  return (

    <div className="product-card">
      <img alt="product-image" className="related-product-img"
        src={images ? images[0].url : "https://tinyurl.com/2utv43j5"}/>
       <RelatedButton compare={compare}/>
     <div className='related related-container-card'>
      <p>{product.category}</p>
      <p>{product.name}</p>
      {salePrice ? <><p style={{color: 'red'}}>${salePrice}</p>
      <p style={{textDecoration: 'line-through'}}>
      ${product.default_price}</p></> : <p>${product.default_price}</p>}
      <p>Stars</p>
    </div>
    </div>
  )

}

// add on sale rendering feature
export default Card;
