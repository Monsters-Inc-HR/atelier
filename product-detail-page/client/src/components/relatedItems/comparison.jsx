import React from 'react';
import itemArray from './dummyData.js';
import _, { map } from 'underscore';


const Comparison = ({closeCompare, focusedItem, product, productID}) => {


const handleClick = (e) => {
  closeCompare();
}

const renderTable = () => {
  let compareFeatures = {};

  let length = Math.max(focusedItem.features.length, product.features.length);

  for (let i = 0; i < length; i++) {
    let featureLeft = focusedItem.features[i];
    let featureRight = product.features[i];

    if (featureLeft && featureLeft.feature) {
      if (!compareFeatures[featureLeft.feature]) {
        compareFeatures[featureLeft.feature] = [];
      }
      compareFeatures[featureLeft.feature][0] = featureLeft.value;
    }

    if (featureRight && featureRight.feature) {
      if (!compareFeatures[featureRight.feature]) {
        compareFeatures[featureRight.feature] = [];
      }
      compareFeatures[featureRight.feature][1] = featureRight.value;
    }
  }

 return _.map(compareFeatures, (values, feature) => {
  return <tr><td>{values[0]}</td><td>{feature}</td><td>{values[1]}</td></tr>
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