import React from 'react';
import itemArray from './dummyData.js';

/*
This component will need the product details of two products
and display their information side to side depending on wether
or not they share features. Refer to diagram for details
*/

const Comparison = ({closeCompare}) => {

  console.log(itemArray);

const handleClick = (e) => {
  closeCompare();
}

  return (
    <div onClick={handleClick}>
      <section className="related-comparison-modal">
      <h5 className="related-comparison-title">Comparing</h5>
      </section>
    </div>
  )
}

export default Comparison;