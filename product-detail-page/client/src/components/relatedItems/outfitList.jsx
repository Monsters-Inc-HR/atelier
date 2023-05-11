import React from 'react';
import Card from './productCard.jsx';



const Outfit =  ({userProducts, compare}) => {



  return (
   <div>
    <h4>Your Outfit</h4>
    <div className="related related-container-list">
      <>{userProducts.length < 1 ? <p>Add a product...</p> : userProducts.map((product, index) => {
        return <Card key={product.id} product={product} compare={compare}/>
      })}</>
    </div>
    </div>
  )
}

export default Outfit;

