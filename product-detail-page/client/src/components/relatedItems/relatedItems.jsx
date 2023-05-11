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
  const [products, setProducts] = useState([]);
  const [productStyles, setProductStyles] = useState([]);
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


  useEffect(() => {
    let isMounted = true;
    let fetchedProducts = [];

    const getProducts = async () => {
      try {
        const stylesArray = await Promise.all(productIds.map((id) => {
          return Controller.getProductDetails(id)
          .catch((err) => {
            console.log('Error getting styles', err);
            return null;
          });
        }));

        if (isMounted) {
          fetchedProducts = stylesArray.filter((styles) => styles !== null);
          setProducts(fetchedProducts);
        }
      } catch (err) {
        console.log('Error getting product styles', err);
      }
    };
    getProducts();

    return () => {
      isMounted = false;
    };
  }, [productIds]);

  useEffect(() => {
    let isMounted = true;
    let fetchedProducts = [];

    const getProducts = async () => {
      try {
        const stylesArray = await Promise.all(productIds.map((id) => {
          return Controller.getProductStyles(id)
          .catch((err) => {
            console.log('Error getting styles', err);
            return null;
          });
        }));

        if (isMounted) {
          fetchedProducts = stylesArray.filter((styles) => styles !== null);
          setProductStyles(fetchedProducts);
        }
      } catch (err) {
        console.log('Error getting product styles', err);
      }
    };
    getProducts();

    return () => {
      isMounted = false;
    };
  }, [productIds]);


  return (
    <>
    <List products={products} productStyles={productStyles} compare={compare}/>
    <Outfit userProducts={userProducts} compare={compare}/>
    {renderComparison ? <Comparison closeCompare={closeCompare}/> : null}
    </>
  )
}

//comment

export default RelatedItems;



