import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import List from './productList.jsx';
import Outfit from './outfitList.jsx';
import Comparison from './comparison.jsx';
import itemArray from './dummyData.js';
const Controller = require('./controller.js');


const RelatedItems = () => {

  const [productIds, setProductIds] = useState([])
  const [products, setProducts] = useState(itemArray);
  const [userProducts, setUserProducts] = useState(itemArray);
  const [renderComparison, setRenderComparison] = useState(false);

  // build a function that sets renderComparison to true
  const compare = () => {
    if (renderComparison === false) {
      setRenderComparison(true);
    } else {
      setRenderComparison(false);
    }
  }

  const closeCompare = () => {
    setRenderComparison(false);
  }

  useEffect(() => {
    Controller.getRelatedProducts()
    .then((data) => {
      setProductIds(data);
    })
    .catch((err) => {
      console.log(err);
    })
  },[]);

  // need to use effect to get array of related products now
  // also use effect to get array of current product images
  // this also means that controller methods will need to get added


  return (
    <>
    <List products={products} compare={compare}/>
    <Outfit userProducts={userProducts} compare={compare}/>
    {renderComparison ? <Comparison closeCompare={closeCompare}/> : null}
    </>
  )
}

//comment

export default RelatedItems;



