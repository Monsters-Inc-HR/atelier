import React from 'react';
import calculateStars from '../../lib/calculateStars.js';
import calculatePercentage from '../../lib/calculatePercentage.js';

const ReviewsSummary = ({ metaData }) => {

  return (
    <div className='rr-summary'>
      <div className='rr-summary-rollup'>
        <div className='rr-number-of-stars'>{calculateStars(metaData)}</div>
        <div className='rr-star-component'>***</div>
      </div>
      <div className='rr-filter-list'>filter list here</div>
      <div className='rr-percentage-recommended'>{calculatePercentage(metaData)}% of reviews recommend this product</div>
      <div className='rr-scale-component'>scale from 1-5</div>
      <div className='rr-scale-component'>scale from 1-5</div>
    </div>
  )
};

export default ReviewsSummary;