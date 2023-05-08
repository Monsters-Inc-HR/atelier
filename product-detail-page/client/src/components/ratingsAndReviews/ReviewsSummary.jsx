import React from 'react';
import StarBar from './StarBar.jsx';
import calculateStars from '../../lib/calculateStars.js';
import calculatePercentage from '../../lib/calculatePercentage.js';

const ReviewsSummary = ({ metaData }) => {
  console.log(metaData);
  return (
    <div className='rr-summary'>
      <div className='rr-summary-rollup'>
        <div className='rr-number-of-stars'>{calculateStars(metaData)}</div>
        <div className='rr-star-component'>***</div>
      </div>
      <div className='rr-filter-list'>
        <div className='rr-filter-message'>filtering by... remove filters</div>
        <StarBar star={ 5 } ratings={ metaData.ratings }/>
      </div>
      <div className='rr-percentage-recommended'>{calculatePercentage(metaData)}% of reviews recommend this product</div>
      <div className='rr-scale-component'>scale from 1-5</div>
      <div className='rr-scale-component'>scale from 1-5</div>
    </div>
  )
};

export default ReviewsSummary;