import React from 'react';
import { useState } from 'react';
import RelatedButton from './relatedButton.jsx';
import DeleteButton from './deleteButton.jsx';
import StarBar from '../ratingsAndReviews/StarBar.jsx';
import Comparison from './comparison.jsx';

const Card = ({product, images, salePrice, focusedItem, Internal, filterUserProducts, updateMain}) => {

  const [renderComparison, setRenderComparison] = useState(false);

  const compare = () => {
    setRenderComparison(!renderComparison);
  }

  const closeCompare = () => {
    setRenderComparison(false);
  }

  const productID = product.id;

  const handleCardImageClick = () => {
    updateMain(productID.toString());
  }

  return (

    <div className="product-card">
      {Internal ? <RelatedButton compare={compare}/>
       : <DeleteButton filterUserProducts={filterUserProducts} productID={productID}/>}
      <img alt="product-image" className="related-product-img"
        src={images ? images[0].url : "https://tinyurl.com/2utv43j5"} onClick={handleCardImageClick}/>
     <div className='related related-container-card'>
      <p className="related-product-category">{product.category}</p>
      <strong className="related-product-name">{product.name}</strong>
      {salePrice ? <div className="related-sale-price"><p style={{color: 'red', marginRight: '5px'}}>${salePrice}</p>
      <p style={{textDecoration: 'line-through'}}>
      ${product.default_price}</p></div> : <p className="related">${product.default_price}</p>}
      <div className="related"><StarBar rating={3}/></div>
    </div>
    {renderComparison ? <Comparison closeCompare={closeCompare}
      productID={product.id} product={product} focusedItem={focusedItem}/> : null}
    </div>
  )

}

// add on sale rendering feature
export default Card;
