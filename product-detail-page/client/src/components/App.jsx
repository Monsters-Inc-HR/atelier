import React, { useState, useEffect } from 'react';
import RelatedItems from './relatedItems/relatedItems.jsx';
import Reviews from './ratingsAndReviews/reviews.jsx';
import QuestionsAndAnswers from './questionsAndAnswers/QuestionsAndAnswers.jsx';
import Overview from './overview/Overview.jsx';
import Controller from './relatedItems/controller.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

const siteName = 'Atelier';
const siteWideAnnouncement = '20% off all winter styles  -  Check out new season styles  -  New fabrics are here!';


const App = () => {

  const [productID, setProductID] = useState('37311');
  const [productInfo, setProductInfo] = useState(undefined);
  const [productIds, setProductIds] = useState([]);
  const [products, setProducts] = useState([]);
  const [userProducts, setUserProducts] = useState([]);
  const [focusedItem, setFocusedItem] = useState({});
  const [productStyles, setProductStyles] = useState([]);

  useEffect(() => {
    setProducts([]);
    setUserProducts([]);
    setProductIds([]);

    Controller.getProductDetails(productID)
      .then((res) => {
        setProductInfo(res)
        setFocusedItem(res);
      })
      .catch((err) => {
        console.log('Error fetching focused product');
      });

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
      <div className='title-bar'>
        <div className='logo-and-navigation'>
          <div className='logo'>{ siteName }</div>
          <div className='search-full'>
            <div className='search'>
              <hr/>
            </div>
            <FontAwesomeIcon icon={ icon({name: 'magnifying-glass', style: 'solid'}) } />
          </div>
        </div>
        <div className='site-wide-announcement'>{ siteWideAnnouncement }</div>
      </div>
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