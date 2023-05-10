import React from 'react';
import Card from './productCard.jsx';



const List =  ({products, compare, productStyles}) => {

console.log(productStyles)

  return (
   <div>
    <h4>Related Items</h4>
    <div className="related related-container-list">
      <>{products.map((product, index) => {
        return <Card key={product.id} product={product} compare={compare}/>
      })}</>
    </div>
    </div>
  )
}

export default List;

