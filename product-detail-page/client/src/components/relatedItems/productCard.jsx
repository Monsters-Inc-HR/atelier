import React from 'react';
import { useState } from 'react';
import RelatedButton from './relatedButton.jsx';
import DeleteButton from './deleteButton.jsx';
import StarBar from '../ratingsAndReviews/StarBar.jsx';
import Comparison from './comparison.jsx';

const Card = ({product, images, salePrice, focusedItem, Internal, filterUserProducts}) => {

  const [renderComparison, setRenderComparison] = useState(false);

  const compare = () => {
    setRenderComparison(!renderComparison);
  }

  const closeCompare = () => {
    setRenderComparison(false);
  }

  const productID = product.id;

  return (

    <div className="product-card">
      <img alt="product-image" className="related-product-img"
        src={images ? images[0].url : "https://tinyurl.com/2utv43j5"}/>
       {Internal ? <RelatedButton compare={compare}/>
       : <DeleteButton filterUserProducts={filterUserProducts} productID={productID}/>}
     <div className='related related-container-card'>
      <p>{product.category}</p>
      <p>{product.name}</p>
      {salePrice ? <><p style={{color: 'red'}}>${salePrice}</p>
      <p style={{textDecoration: 'line-through'}}>
      ${product.default_price}</p></> : <p>${product.default_price}</p>}
      <StarBar rating={3}/>
    </div>
    {renderComparison ? <Comparison closeCompare={closeCompare}
      productID={product.id} product={product} focusedItem={focusedItem}/> : null}
    </div>
  )

}

// add on sale rendering feature
export default Card;
