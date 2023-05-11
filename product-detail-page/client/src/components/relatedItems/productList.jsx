import React from 'react';
import Card from './productCard.jsx';
import { useState, useEffect } from 'react';



const List =  ({products, compare, productStyles}) => {

const [productImages, setProductImages] = useState({});
const [salePrices, setSalePrices] = useState({});
const [viewCounter, setViewCounter] = useState(0);


  const increaseView = () => {
    setViewCounter(viewCounter + 1);
  }

  const decreaseView = () => {
    setViewCounter(viewCounter - 1);
  }
// take advantage of this function to also set sale prices
useEffect(() => {
 let isMounted = true;
 let images = {}

 if (isMounted) {
  productStyles.map((product) => {
    // console.log(product);

    let hasDefault = false;

    for (var i = 0; i < product.results.length; i++) {
      let currentProduct = product.results[i];

      if (currentProduct['default?']) {
        hasDefault = true;
        images[product.product_id] = currentProduct.photos;
      }
    }

    if (!hasDefault) {
      images[product.product_id] = product.results[0].photos;
    }
  })
 };
 setProductImages(images);

 return () => {
  isMounted = false;
 };
}, [productStyles])


  return (
   <div>
    <h4>Related Items</h4>
    <div className="related-container-list">
      <>{products.map((product, index) => {
        let images = productImages[product.id];
        return <Card key={product.id} images={images} product={product} compare={compare}/>
      })}</>
    </div>
    {viewCounter > 0 ? <button type="left-button" onClick={decreaseView}>Left</button> : null}
    {viewCounter < products.length ? <button type="right-button" onClick={increaseView}>Right</button>: null}
    </div>
  )
}

export default List;

