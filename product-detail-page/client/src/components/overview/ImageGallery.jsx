import React, {useState} from "react";
import ThumbnailList from './ThumbnailList.jsx';

const ImageGallery = ({newStyle, mainImg, setMainImg, pickedImg, setPickedImg}) => {
    // const [pickedImg, setPickedImg] = useState(newStyle.photos[0])

    let handleSelectStyle = function(clickedImg) {
        setPickedImg(clickedImg)
    }

  console.log('newStyle', newStyle.photos[0])
  return (
    <div>
      <img className="main-img" src={mainImg.url}/>
      <ul className="ov-no-list-dot thumbnails">
        {newStyle.photos.map((photoObj, index) => (
          <ThumbnailList clickHandler={handleSelectStyle} pickedImg={pickedImg} setMainImg={setMainImg} photoObj={photoObj} key={index}/>
        ))}
      </ul>
    </div>
  )
}


export default ImageGallery