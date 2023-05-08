import React from 'react';
import { useState } from 'react';
import List from './productList.jsx';
import Outfit from './outfitList.jsx';
import Comparison from './comparison.jsx';
import itemArray from './dummyData.js';

const RelatedItems = () => {

  const [products, setProducts] = useState(itemArray);
  const [userProducts, setUserProducts] = useState([]);
  const [renderComparison, setRenderComparison] = useState(false);

  // build a function that sets renderComparison to true
  const compare = () => {
    if (renderComparison === false) {
      setRenderComparison(true);
    } else {
      setRenderComparison(false);
    }

    console.log(renderComparison);
  }

  return (
    <>
    <List products={products} compare={compare}/>
    <Outfit userProducts={userProducts} compare={compare}/>
    {renderComparison ? <Comparison compare={compare}/> : null}
    </>
  )
}

export default RelatedItems;



