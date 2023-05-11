import React from 'react';
import Card from './productCard.jsx';
import { useState } from 'react';



const Outfit =  ({userProducts, compare}) => {

  const [viewCounter, setViewCounter] = useState(0);

  const increaseView = () => {
    setViewCounter(viewCounter + 1);
  }

  const decreaseView = () => {
    setViewCounter(viewCounter - 1);
  }



  return (
   <div>
    <h4>Your Outfit</h4>
    <div className="related related-container-list">
      <>{userProducts.length < 1 ? <p>Add a product...</p> : userProducts.map((product, index) => {
        return <Card key={product.id} product={product} compare={compare}/>
      })}</>
    </div>
    {viewCounter > 0 ? <button type="left-button" className="left-button" onClick={decreaseView}>Left</button> : null}
    {viewCounter < userProducts.length && userProducts.length > 1 ? <button type="right-button" className="right-button" onClick={increaseView}>Right</button>: null}
    </div>
  )
}

export default Outfit;

