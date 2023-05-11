import React from 'react';

const RelatedButton = ({compare}) => {

  const handleClick = (e) => {
    compare();
  }

  return (
    <button className="related-compare-button" onClick={handleClick}>
      ⭐
    </button>
  )

}

export default RelatedButton;