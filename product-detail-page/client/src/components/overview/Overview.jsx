import React from "react";
import ImageGallery from './ImageGallery.jsx';
import ProductInfo from './ProductInfo.jsx';
import StylesAndCart from './StylesAndCart.jsx';
import ProductDescription from './ProductDescription.jsx';

const Overview = () => {
  productInfoData = [
    {
      "id": 11,
      "name": "Air Minis 250",
      "slogan": "Full court support",
      "description": "This optimized air cushion pocket reduces impact but keeps a perfect balance underfoot.",
      "category": "Basketball Shoes",
      "default_price": "0",
      "features": [
      {
        "feature": "Sole",
        "value": "Rubber"
      },
      {
        "feature": "Material",
        "value": "FullControlSkin"
      }
      ]
    },
    {
      "id": 11,
      "name": "Air Minis 250",
      "slogan": "Full court support",
      "description": "This optimized air cushion pocket reduces impact but keeps a perfect balance underfoot.",
      "category": "Basketball Shoes",
      "default_price": "0",
      "features": [
      {
        "feature": "Sole",
        "value": "Rubber"
      },
      {
        "feature": "Material",
        "value": "FullControlSkin"
      }
      ]
    }
  ]

  return (
    <div>
      <div>site-wide announcement message! - Sale/Discount Offer - new product highlight</div>
      <ImageGallery />
      <ProductInfo />
      <StylesAndCart />
      <ProductDescription />
      <p>_________________________________________________________________</p>
    </div>
  )
}


export default Overview