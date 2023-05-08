import React from 'react';
import { useState } from 'react';
import Card from './productCard.jsx';


const List =  ({products, compare}) => {

  const [viewCounter, setViewCounter] = useState(0);

  const increaseView = () => {
    setViewCounter(viewCounter + 1);
  }

  const decreaseView = () => {
    setViewCounter(viewCounter - 1);
  }

  return (
   <div>
    <h4>Related Items</h4>
    <div className="related related-container-list">
      <>{products.map((product, index) => {
        return <Card key={product.id} product={product} compare={compare}/>
      })}</>
    </div>
    {viewCounter > 0 ? <button type="left-button" onClick={decreaseView}>Left</button> : null}
    {viewCounter < products.length ? <button type="right-button" onClick={increaseView}>Right</button>: null}
    </div>
  )
}

export default List;

