import React from 'react';

const RelatedButton = ({compare}) => {

  const handleClick = (e) => {
    compare();
  }

  return (
    <button className="related related-container-button" onClick={handleClick}>
      ⭐
    </button>
  )

}

export default RelatedButton;