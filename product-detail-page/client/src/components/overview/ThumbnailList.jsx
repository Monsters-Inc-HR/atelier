import React from "react";

const ThumbnailList = ({photoObj, index, setMainImg}) => {

  let handleMainImg = function() {
    setMainImg(photoObj.thumbnail_url)
  }
  return (
    <li>
      <img onClick={handleMainImg} className="thumbnail-img" src={`${photoObj.thumbnail_url}`} alt="product-image"/>
    </li>
  )
}


export default ThumbnailList