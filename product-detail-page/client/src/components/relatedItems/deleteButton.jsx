import React from 'react';

const DeleteButton = ({userProducts}) => {

const handleClick = (e) => {
  console.log('Boink')
}

console.log(userProducts);

  return (
    <button className="related-compare-button" onClick={handleClick}>
      ❌
    </button>
  )

}

export default DeleteButton;