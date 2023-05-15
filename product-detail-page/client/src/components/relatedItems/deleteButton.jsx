import React from 'react';

const DeleteButton = ({userProducts, filterUserProducts, productID}) => {

const handleClick = (e) => {
  filterUserProducts(productID)
}

// console.log(userProducts);

  return (
    <button className="related-compare-button" onClick={handleClick}>
      ❌
    </button>
  )

}

export default DeleteButton;