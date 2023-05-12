import React from "react";

const ThumbnailList = ({photoObj, index}) => {
  return (
    <li>
      <img src={`${photoObj.thumbnail_url}`} alt="product-image"/>
    </li>
  )
}


export default ThumbnailList