import React from 'react';
import Card from './productCard.jsx';



const List =  ({products, compare}) => {



  return (
   <div>
    <h4>List Title</h4>
    <div className="related related-container-list">
      <>{products.map((product, index) => {
        return <Card key={product.id} product={product} compare={compare}/>
      })}</>
    </div>
    </div>
  )
}

export default List;

