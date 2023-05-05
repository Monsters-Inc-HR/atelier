import React from 'react';

const ReviewsSummary = ({ metaData }) => {

  const calculateStars = (data) => {
    const ratings = data.ratings;
    let totalCount = 0;
    let totalStars = 0;
    for (let starKey in ratings) {
      let count = ratings[starKey];
      totalCount += count;
      totalStars += parseInt(starKey) * count;
    }
    return Number.parseFloat(totalStars / totalCount).toFixed(1); // return average to one decimal place
  }

  return (
    <div className='rr-summary'>
      <div className='rr-summary-rollup'>
        <div className='rr-number-of-stars'>{calculateStars(metaData)}</div>
        <div className='rr-star-component'>***</div>
      </div>
      <div className='rr-filter-list'>filter list here</div>
      <div className='rr-percentage-recommended'>95% of review recommend this product</div>
      <div className='rr-scale-component'>scale from 1-5</div>
      <div className='rr-scale-component'>scale from 1-5</div>
    </div>
  )
};

export default ReviewsSummary;