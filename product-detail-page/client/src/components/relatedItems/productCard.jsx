import React from 'react';
import RelatedButton from './relatedButton.jsx';

const Card = ({product, compare, images}) => {

  console.log('images:', images);

  const handleClick = (e) => {
      compare();
  }

  return (

<<<<<<< HEAD
    <div className="related-container-list">
    {/* <RelatedButton/> */}
    <div onClick={handleClick}>
    <img alt="product-image"/>
    <div >
=======
    <div className="related related-container-card" onClick={handleClick}>
     <div className='related related-container-card-top'>
        <RelatedButton/>
        <img alt="product-image"
        src={images ? images[0].url : "https://tinyurl.com/2utv43j5"} />
    </div>

>>>>>>> be879b2e067c9a84f4cd972c30d4ee61418d7796
      <p>{product.category}</p>
      <p>{product.name}</p>
      <p>${product.default_price}</p>
      <p>Stars</p>
    </div>

    </div>
       </div>

  )

}

export default Card;
