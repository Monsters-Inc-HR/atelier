import React from 'react';
import { useState } from 'react';
import List from './productList.jsx';
import Outfit from './outfitList.jsx';
import comparison from './comparison.jsx';
import itemArray from './dummyData.js';

const RelatedItems = () => {

  const [products, setProducts] = useState(itemArray);
  const [userProducts, setUserProducts] = useState([]);

  return (
    <>
    <List products={products}/>
    <Outfit userProducts={userProducts}/>
    </>
  )
}

export default RelatedItems;



