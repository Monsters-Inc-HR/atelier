import React from 'react';
import calculateStars from '../../lib/calculateStars.js';
import calculatePercentage from '../../lib/calculatePercentage.js';

const ReviewsSummary = ({ metaData }) => {

  // const calculateStars = (data) => {
  //   const ratings = data.ratings;
  //   let totalCount = 0;
  //   let totalStars = 0;
  //   for (let starKey in ratings) {
  //     let count = parseInt(ratings[starKey]);
  //     totalCount += count;
  //     totalStars += parseInt(starKey) * count;
  //   }
  //   return Number.parseFloat(totalStars / totalCount).toFixed(1); // return average to one decimal place
  // }

  // const calculatePercentage = (data) => {
  //   const nonRecommendersCount = parseInt(data.recommended.false);
  //   const recommendersCount = parseInt(data.recommended.true);
  //   const percentage = 100 * (recommendersCount / (nonRecommendersCount + recommendersCount));
  //   return Math.round(percentage);
  // }

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