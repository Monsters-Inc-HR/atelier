import React from 'react';
import List from './productList.jsx';
import comparison from './comparison.jsx';
import itemArray from './dummyData.js';

const RelatedItems = () => {

  let products = itemArray;

  return (
    <>
    <List products={products}/>
    <List/>
    </>
  )
}

export default RelatedItems;



