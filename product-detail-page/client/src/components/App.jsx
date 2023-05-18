import React, { useState, useEffect } from 'react';
import RelatedItems from './relatedItems/relatedItems.jsx';
import Reviews from './ratingsAndReviews/reviews.jsx';
import QuestionsAndAnswers from './questionsAndAnswers/QuestionsAndAnswers.jsx';
import Overview from './overview/Overview.jsx';
import { getProductDetails } from './relatedItems/controller.js';
import Controller from './relatedItems/controller.js';


const App = () => {

  const [productID, setProductID] = useState('37311');
  const [productInfo, setProductInfo] = useState(undefined);
  const [productIds, setProductIds] = useState([]);
  const [products, setProducts] = useState([]);
  const [userProducts, setUserProducts] = useState([]);
  const [focusedItem, setFocusedItem] = useState({});
  const [productStyles, setProductStyles] = useState([]);

  useEffect(() => {
    getProductDetails(productID)
      .then(data => setProductInfo(data))
      .catch(err => console.log("there was an error getting the product data in the App"));
  }, [productID]);




  useEffect(() => {
    setProducts([]);
    setUserProducts([]);
    setProductIds([]);

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

  }, [productID]);

  const filterUserProducts = (productID) => {
    setUserProducts(userProducts.filter((product, index) => {
       return userProducts[index].id !== productID
    }))
  }


  const updateMain = (productID) => {
    setProductID(productID);
  }


  return (
    <div>
      <Overview />
      <RelatedItems productID={productID}
      updateMain={updateMain} setProductID={setProductID}
        productInfo={productInfo} productIds={productIds}
        products={products} userProducts={userProducts}
        focusedItem={focusedItem} productStyles={productStyles}
        filterUserProducts={filterUserProducts}/>
      <QuestionsAndAnswers productID={ productID } productName={ productInfo && productInfo.name }/>
      <Reviews productID={ productID } productName={ productInfo && productInfo.name }/>
    </div>
  )
}

export default App;