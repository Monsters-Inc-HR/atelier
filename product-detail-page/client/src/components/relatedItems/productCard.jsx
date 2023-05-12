import React from 'react';
import { useState } from 'react';
import RelatedButton from './relatedButton.jsx';
import StarBar from '../ratingsAndReviews/StarBar.jsx';
import Comparison from './comparison.jsx';

const Card = ({product, images, salePrice, focusedItem}) => {

  const [renderComparison, setRenderComparison] = useState(false);


  const compare = () => {
    if (renderComparison === false) {
      setRenderComparison(true);
    } else {
      setRenderComparison(false);
    }
  }

  const closeCompare = () => {
    setRenderComparison(false);
  }

  return (

    <div className="product-card">
      <img alt="product-image" className="related-product-img"
        src={images ? images[0].url : "https://tinyurl.com/2utv43j5"}/>
       <RelatedButton compare={compare} focusedItem={focusedItem}/>
     <div className='related related-container-card'>
      <p>{product.category}</p>
      <p>{product.name}</p>
      {salePrice ? <><p style={{color: 'red'}}>${salePrice}</p>
      <p style={{textDecoration: 'line-through'}}>
      ${product.default_price}</p></> : <p>${product.default_price}</p>}
      <StarBar rating={3}/>
    </div>
    {renderComparison ? <Comparison closeCompare={closeCompare}
      productID={product.id} focusedItem={focusedItem}/> : null}
    </div>
  )

}

// add on sale rendering feature
export default Card;
