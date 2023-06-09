import React from "react";
import StarBar from '../ratingsAndReviews/StarBar.jsx';

const ProductInfo = ({productInfoData}) => {
  // let productInfoData = {
  //   "id": 37311,
  //   "campus": "hr-rfe",
  //   "name": "Camo Onesie",
  //   "slogan": "Blend in to your crowd",
  //   "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
  //   "category": "Jackets",
  //   "default_price": "140.00",
  //   "created_at": "2021-08-13T14:37:33.145Z",
  //   "updated_at": "2021-08-13T14:37:33.145Z"
  // }
  return (
    <div>
      <div className="ov-reviews">
        <div className="ov-stars"><StarBar rating={3}/></div>
        <a>Read all reviews</a>
      </div>
      <h3>{productInfoData.category}</h3>
      <h1>{productInfoData.name}</h1>
    </div>
  )
}


export default ProductInfo