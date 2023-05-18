import React, { useState, useEffect } from 'react';
import RelatedItems from './relatedItems/relatedItems.jsx';
import Reviews from './ratingsAndReviews/reviews.jsx';
import QuestionsAndAnswers from './questionsAndAnswers/QuestionsAndAnswers.jsx';
import Overview from './overview/Overview.jsx';
import { getProductDetails } from './relatedItems/controller.js';


const App = () => {
  const [productID, setProductID] = useState('37311');
  const [productInfo, setProductInfo] = useState(undefined);

  useEffect(() => {
    getProductDetails(productID)
      .then(data => setProductInfo(data))
      .catch(err => console.log("there was an error getting the product data in the App"));
  }, [productID]);

  const updateMain = (productID) => {
    setProductID(productID);
  }

  return (
    <div>
      <Overview />
      <RelatedItems productID={productID} updateMain={updateMain} setProductID={setProductID}/>
      <QuestionsAndAnswers/>
      <Reviews productID={ productID } productName={ productInfo && productInfo.name }/>
    </div>
  )
}

export default App;