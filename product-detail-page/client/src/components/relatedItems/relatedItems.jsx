import React, { useState, useEffect } from 'react';
import axios from 'axios';
import List from './productList.jsx';
import Outfit from './outfitList.jsx';
import Comparison from './comparison.jsx';
import itemArray from './dummyData.js';
import Controller from './controller.js';

const RelatedItems = ({ productID, updateMain }) => {

  const [productIds, setProductIds] = useState([]);
  const [products, setProducts] = useState(itemArray);
  const [userProducts, setUserProducts] = useState(itemArray);
  const [focusedItem, setFocusedItem] = useState({});
  const [productStyles, setProductStyles] = useState([]);

  console.log('Main product id:', productID);

  useEffect(() => {
    Controller.getRelatedProducts(productID)
      .then((productIds) => {
        setProductIds(productIds);
        return Promise.all(
          productIds.map((id) => {
            return Promise.all([
              Controller.getProductDetails(id),
              Controller.getProductStyles(id)
            ])
            .catch((err) => {
              console.log('Error getting details', err);
              return null;
            });
          })
        );
      })
      .then((products) => {
        const productDetails = products.map(p => p[0]);
        const productStyles = products.map(p => p[1]);
        setProducts(productDetails);
        setProductStyles(productStyles);
        setUserProducts([productDetails[0]]);
      })
      .catch((err) => {
        console.log(err);
      });

    Controller.getProductDetails('37311')
      .then((res) => {
        setFocusedItem(res);
      })
      .catch((err) => {
        console.log('Error fetching focused product');
      });

  }, []);

  const filterUserProducts = (productID) => {
    setUserProducts(userProducts.filter((product, index) => {
       return userProducts[index].id !== productID
    }))
  }


  return (
    <>
      <List products={products} productStyles={productStyles} focusedItem={focusedItem} updateMain={updateMain}/>
      <Outfit userProducts={userProducts} productStyles={productStyles} filterUserProducts={filterUserProducts}/>
    </>
  );
};

export default RelatedItems;

// Hithere

