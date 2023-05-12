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
            <th>Product 1</th>
            <th>Features</th>
            <th>Product 2</th>
        </tr>
        <tr>
            <td>Feature1</td>
            <td>Feature1</td>
            <td>Feature1</td>
            <td>Feature1</td>
        </tr>
        <tr>
            <td>Feature1</td>
            <td>Feature1</td>
            <td>Feature1</td>
            <td>Feature1</td>
        </tr>
      </table>
      </section>
    </div>
  )
}

export default Comparison;