import React, { useState, useEffect } from 'react';
import RelatedItems from './relatedItems/relatedItems.jsx';
import Reviews from './ratingsAndReviews/reviews.jsx';
import QuestionsAndAnswers from './questionsAndAnswers/QuestionsAndAnswers.jsx';
import Overview from './overview/Overview.jsx';
import { getProductDetails } from './relatedItems/controller.js';
const defaultProductID = 37311;

const App = () => {
  const [productID, setProductID] = useState(defaultProductID);
  const [productInfo, setProductInfo] = useState(undefined);

  useEffect(() => {
    getProductDetails(productID)
      .then(data => setProductInfo(data))
      .catch(err => console.log("there was an error getting the product data in the App"));
  }, [productID]);

  return (
    <div>
      <Overview />
      <RelatedItems/>
      <QuestionsAndAnswers productID={ productID } productName={ productInfo && productInfo.name }/>
      <Reviews productID={ productID } productName={ productInfo && productInfo.name }/>
    </div>
  )
}

export default App;