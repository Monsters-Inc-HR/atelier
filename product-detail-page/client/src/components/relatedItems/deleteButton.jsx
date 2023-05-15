import React from 'react';

const DeleteButton = ({props}) => {

const handleClick = (e) => {
  console.log('Boink')
}

  return (
    <button className="related-compare-button" onClick={handleClick}>
      ❌
    </button>
  )

}

export default DeleteButton;