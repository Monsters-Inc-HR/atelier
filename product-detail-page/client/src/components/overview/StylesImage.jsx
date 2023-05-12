import React from "react";

const StylesImage = ({style}) => {

  let handleSelectStyle = function() {
    console.log(style.style_id)
    console.log('hello worlds and aliens')
  }
  return (
    <li>
      <img onClick={handleSelectStyle} src={`${style.photos[0].thumbnail_url}`} alt="product-image"/>

    </li>
  )
}


export default StylesImage