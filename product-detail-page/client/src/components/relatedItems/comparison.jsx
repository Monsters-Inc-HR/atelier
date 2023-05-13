import React from 'react';
import itemArray from './dummyData.js';

/*
This component will need the product details of two products
and display their information side to side depending on wether
or not they share features. Refer to diagram for details
*/

const Comparison = ({closeCompare, focusedItem, productID, product}) => {

  console.log('product', product);
  console.log('focusedItem', focusedItem);

const handleClick = (e) => {
  closeCompare();
}


  return (
    <div onClick={handleClick} className="related-comparison-modal">
      <section>
      <h5 className="related-comparison-title">Comparing</h5>
      <table className="related-comparison-table">
        <tr>
            <th>{focusedItem.name}</th>
            <th>{product.name}</th>
        </tr>
          <tbody>
            {focusedItem.features.map((feature, index) => {
              return <td key={index}>{feature.value}</td>
            })}
            {product.features.map((feature, index) => {
              return <td key={10 * index}>{feature.value}</td>
            })}
          </tbody>
      </table>
      </section>
    </div>
  )
}

export default Comparison;