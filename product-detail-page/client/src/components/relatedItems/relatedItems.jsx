import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import List from './productList.jsx';
import Outfit from './outfitList.jsx';
import Comparison from './comparison.jsx';
import itemArray from './dummyData.js';


const RelatedItems = () => {

  const [products, setProducts] = useState([]);
  const [userProducts, setUserProducts] = useState([]);
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
    axios(`http://localhost:3000/products?page=1&count=5`)
    .then((res) => {
      setProducts(res.data);
      setUserProducts([res.data[0]])
    })
    .catch((err) => {
      console.log(err)
    })
  },[])


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



