import React from 'react';
// import { useState, useEffect } from 'react';
import itemArray from './dummyData.js';

/*
This component will need the product details of two products
and display their information side to side depending on wether
or not they share features. Refer to diagram for details
*/

const Comparison = ({closeCompare, focusedItem, product, productID}) => {

  // console.log('product', product);
  // console.log('focusedItem', focusedItem);

const handleClick = (e) => {
  closeCompare();
}

// const compareFeatures = {
//     left: focusedItem.features,
//     right: product.features,
//     length:
//         focusedItem.features.length > product.features.length ?
//         focusedItem.features.length : product.features.length
//     };

// const compareFeatures;

const renderTable = () => {
  let compareFeatures = new Set();

  let length = focusedItem.features.length > product.features.length ?
               focusedItem.features.length : product.features.length;

  for (var i = 0; i < length; i++) {
    compareFeatures[focusedItem.features[i].feature] = [focusedItem.features[i].value];

    if (compareFeatures[product.features[i].feature]) {
      compareFeatures[product.features[i].feature].push(product.features[i].value);
    } else {
      compareFeatures[product.features[i].feature] = [product.features[i].value]
    }
  }

  return compareFeatures.forEach((feature, key) => {
    return <th>Hi</th>
  })

}


  return (
    <div onClick={handleClick} className="related-comparison-modal">
      <section>
      <h5 className="related-comparison-title">Comparing</h5>
      <table className="related-comparison-table">
        <thead>
          <tr>
            <th>{focusedItem.name}</th>
            <th>Feature</th>
            <th>{product.name}</th>
          </tr>
        </thead>
        <tbody>
          {renderTable()}
        </tbody>
        <tbody>

        </tbody>
      </table>
      </section>
    </div>
  )
}

export default Comparison;