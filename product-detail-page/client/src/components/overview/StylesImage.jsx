import React from "react";

const StylesImage = ({style}) => {
  return (
    <li>
      <img src={`${style.photos[0].thumbnail_url}`} alt="product-image"/>

    </li>
  )
}


export default StylesImage