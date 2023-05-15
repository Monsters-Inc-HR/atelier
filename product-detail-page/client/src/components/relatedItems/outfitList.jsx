import React from 'react';
import Card from './productCard.jsx';
import { useState, useRef, useEffect } from 'react';



const Outfit = ({ userProducts, productStyles }) => {

  const [productImages, setProductImages] = useState({});
  const [salePrices, setSalePrices] = useState({});
  const [viewCounter, setViewCounter] = useState(0);

  const containerRef = useRef(null);

  const increaseView = () => {
    setViewCounter(viewCounter + 1);
    containerRef.current.scrollLeft += 250;
  }

  const decreaseView = () => {
    setViewCounter(viewCounter - 1);
    containerRef.current.scrollLeft -= 250;
  }

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

  const Internal = false;

  return (
    <div>
      <h4>Related Items</h4>
      <div
        className="related-container-list"
        ref={containerRef}
        style={{ overflowX: 'scroll' }}
      >
        {userProducts.map((product) => {
          if (product) {
            let images = productImages[product.id];
            let salePrice = salePrices[product.id];
            return (
              <Card
                key={product.id}
                images={images}
                salePrice={salePrice}
                product={product}
                Internal={Internal}
              />
            );
          }
        })}
      </div>
      {viewCounter > 0 ? (
        <button className="left-button" onClick={decreaseView}>
          Left
        </button>
      ) : null}
      {viewCounter < userProducts.length ? (
        <button className="right-button" onClick={increaseView}>
          Right
        </button>
      ) : null}
    </div>
  );
}

export default Outfit;

