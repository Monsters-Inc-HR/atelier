import React from 'react';

const Comparison = ({closeCompare}) => {

const handleClick = (e) => {
  closeCompare();
}

  return (
    <div onClick={handleClick}>
      <section className="related-comparison-modal">
      <h4>Comparison</h4>
      </section>
    </div>
  )
}

export default Comparison;