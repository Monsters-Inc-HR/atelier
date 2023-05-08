import React from "react";
import ImageGallery from './ImageGallery.jsx';
import ProductInfo from './ProductInfo.jsx';
import StylesAndCart from './StylesAndCart.jsx';

const Overview = () => {
  const productInfoData = [
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
      <ImageGallery/>
      <ProductInfo/>
      <StylesAndCart/>
      <h5>Product Slogan. Pithy Description Or Catchphrase.</h5>
      <p>
        You should buy everything on this cite because i said so.
        I just want to be rich and have all the worlds money.
        Tell everyone you come across to buy my clothes.
        Its not wortht the price but i dont care i just care about getting all of your money.
        Your gonna do it because you are not gonna be concisered cool if you dont wear mt clothes.
      </p>
      <div>
        LIST OF PRODUCT INFO
        LIST OF PRODUCT INFO
        LIST OF PRODUCT INFO
        LIST OF PRODUCT INFO
      </div>
      <p>_________________________________________________________________</p>
    </div>
  )
}


export default Overview