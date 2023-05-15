import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import List from './productList.jsx';
import Outfit from './outfitList.jsx';
import Comparison from './comparison.jsx';
import itemArray from './dummyData.js';
import Controller from './controller.js';


const RelatedItems = () => {

  const [productIds, setProductIds] = useState([])
  const [products, setProducts] = useState(itemArray);
  const [productStyles, setProductStyles] = useState([]);
  const [userProducts, setUserProducts] = useState([]);
  const [focusedItem, setFocusedItem] = useState({});

  useEffect(() => {
    let isMounted = true;

    const getRelatedProducts = async () => {
      try {
        const data = await Controller.getRelatedProducts();
        if (isMounted) {
          setProductIds(data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    getRelatedProducts();

    return () => {
      isMounted = false;
    };
  }, []);


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
          console.log('fetched Products:', fetchedProducts);
          setUserProducts([fetchedProducts[0]]);
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

    setUserProducts([products[0]]);

    return () => {
      isMounted = false;
    }
  }, [])

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

  useEffect(() => {

    Controller.getProductDetails('37311')
    .then((res) => {
      setFocusedItem(res)
    })
    .catch((err) =>{
      console.log('Error fetching focused product');
    })

  }, [productStyles]);



  return (
    <>
    <List products={products} productStyles={productStyles} focusedItem={focusedItem}/>
    <Outfit userProducts={userProducts}/>
    </>
  )
}

export default RelatedItems;



