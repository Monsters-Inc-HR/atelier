import React from 'react';
import BarGraph from './BarGraph.jsx';
import calculateStars from '../../lib/calculateStars.js';
import calculatePercentage from '../../lib/calculatePercentage.js';

const ReviewsSummary = ({ metaData, filterClick, removeFilters }) => {
  return (
    <div className='rr-summary'>
      <div className='rr-summary-rollup'>
        <div className='rr-number-of-stars'>{calculateStars(metaData)}</div>
        <div className='rr-star-component'>***</div>
      </div>
      <div className='rr-filter-list'>
        <div className='rr-filter-message'>filtering by... <span onClick={ removeFilters }>remove filters</span></div>
        <BarGraph filterClick={ filterClick } star={ 5 } ratings={ metaData.ratings }/>
        <BarGraph filterClick={ filterClick } star={ 4 } ratings={ metaData.ratings }/>
        <BarGraph filterClick={ filterClick } star={ 3 } ratings={ metaData.ratings }/>
        <BarGraph filterClick={ filterClick } star={ 2 } ratings={ metaData.ratings }/>
        <BarGraph filterClick={ filterClick } star={ 1 } ratings={ metaData.ratings }/>
      </div>
      <div className='rr-percentage-recommended'>{calculatePercentage(metaData)}% of reviews recommend this product</div>
      <div className='rr-scale-component'>scale from 1-5</div>
      <div className='rr-scale-component'>scale from 1-5</div>
    </div>
  )
};

export default ReviewsSummary;