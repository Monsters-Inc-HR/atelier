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
 let images = {};
 let sales = {}

 if (isMounted) {
  productStyles.map((product) => {

    let hasDefault = false;
    let onSale = false;

    for (var i = 0; i < product.results.length; i++) {
      let currentProduct = product.results[i];


      if (currentProduct.sale_price) {
        if (sales[product.product_id] > currentProduct.sale_price || !sales[product.product_id]) {
          sales[product.product_id] = currentProduct.sale_price;
        }
      }

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
 setSalePrices(sales);

 return () => {
  isMounted = false;
 };
}, [productStyles])


  return (
   <div>
    <h4>Related Items</h4>
    <div className="related related-container-list">
      <>{products.map((product, index) => {
        if (product) {
          let images = productImages[product.id];
          let salePrice = salePrices[product.id];
          return <Card key={product.id} images={images}
            salePrice={salePrice} product={product} compare={compare}/>
        }
      })}</>
    </div>
    {viewCounter > 0 ? <button type="left-button" className="left-button" onClick={decreaseView}>Left</button> : null}
    {viewCounter < products.length ? <button type="right-button" className="right-button" onClick={increaseView}>Right</button>: null}
    </div>
  )
}

export default List;

