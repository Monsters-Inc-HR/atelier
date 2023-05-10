import React from 'react';
import { useState } from 'react';
import Card from './productCard.jsx';


const Outfit =  ({userProducts, compare}) => {

  const [viewCounter, setViewCounter] = useState(0);

  const increaseView = () => {
    setViewCounter(viewCounter + 1);
  }

  const decreaseView = () => {
    setViewCounter(viewCounter - 1);
  }
  console.log(userProducts);
  console.log(typeof userProducts);
  return (
   <div>
    <h4>Your Outfit</h4>
    <div className="related-container-list">
      <>{userProducts.length < 1 ? <p>Add a product...</p> : userProducts.map((product, index) => {
        return <Card key={product.id} product={product} compare={compare}/>
      })}</>
    </div>
    {viewCounter > 0 ? <button type="left-button" onClick={decreaseView}>Left</button> : null}
    {viewCounter < userProducts.length && userProducts.length > 1 ? <button type="right-button" onClick={increaseView}>Right</button>: null}
    </div>
  )
}

export default Outfit;

