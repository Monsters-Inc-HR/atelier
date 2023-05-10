import React from 'react';
import Card from './productCard.jsx';
import { useState, useEffect } from 'react';



const List =  ({products, compare, productStyles}) => {

const [productImages, setProductImages] = useState({});
const [salePrices, setSalePrices] = useState({});


// take advantage of this function to also set sale prices
useEffect(() => {
 let isMounted = true;
 let images = {}

 if (isMounted) {
  productStyles.map((product) => {
    // console.log(product);

    // define boolean to check wether has default or not
    let hasDefault = false;

    for (var i = 0; i < product.results.length; i++) {
      let currentProduct = product.results[i];

      if (currentProduct['default?']) {
        hasDefault = true;
        images[product.product_id] = {photos: currentProduct.photos}
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
    <div className="related related-container-list">
      <>{products.map((product, index) => {
        return <Card key={product.id} productImages={productImages} product={product} compare={compare}/>
      })}</>
    </div>
    </div>
  )
}

export default List;

