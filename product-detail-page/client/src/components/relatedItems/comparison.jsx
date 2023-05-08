import React from 'react';

const Comparison = ({compare}) => {

const handleClick = (e) => {
  compare();
}

  return (
    <div onClick={handleClick}>
      <h4>Comparison</h4>
    </div>
  )
}

export default Comparison;