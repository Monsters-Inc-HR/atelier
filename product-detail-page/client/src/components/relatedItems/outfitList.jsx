import React from 'react';
import Card from './productCard.jsx';
import { useState, useRef } from 'react';



const Outfit = ({ userProducts }) => {


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



  const Internal = false;

  return (
    <div>
      <h4>Your Outfit</h4>
      <div className="related-container-list"
      ref={containerRef} style={{overflowX: 'scroll'}}>
        <>{userProducts.length < 1 ? <p>Add a product...</p> : userProducts.map((product, index) => {
          return <Card key={product.id} product={product} Internal={Internal}/>
        })}</>
      </div>
      {viewCounter > 0 ? <button type="left-button"
        className="left-button"
        onClick={decreaseView}>Left</button> : null}
      {viewCounter < userProducts.length && userProducts.length > 1 ?
        <button type="right-button" className="right-button"
          onClick={increaseView}>Right</button> : null}
    </div>
  )
}

export default Outfit;

