import React from "react";

const StylesImage = ({style, chosenStyle, clickHandler}) => {

  return (
    <li onClick={() => clickHandler(style)}>
      <img  className={`styles-img ${chosenStyle.style_id === style.style_id && "ov-selected"}`} src={`${style.photos[0].thumbnail_url}`} alt="product-image"/>

    </li>
  )
}


export default StylesImage