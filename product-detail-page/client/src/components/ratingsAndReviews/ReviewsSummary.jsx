import React from 'react';
import BarGraph from './BarGraph.jsx';
import StarBar from './StarBar.jsx';
import Scale from './Scale.jsx';
import calculateStars from '../../lib/calculateStars.js';
import calculatePercentage from '../../lib/calculatePercentage.js';
import makeFilterMessage from '../../lib/makeFilterMessage.js';

const ReviewsSummary = ({ metaData, filters, filterClick, removeFilters }) => {
  return (
    <div className='rr-summary'>
      <div className='rr-summary-rollup'>
        <div className='rr-number-of-stars'>{ calculateStars(metaData, 1) }</div>
        <StarBar rating={ calculateStars(metaData, 2) } />
      </div>
      <div className='rr-filter-list'>
        {filters.length > 0 &&
        <div className='rr-filter-message'>Filtering for {makeFilterMessage(filters)} reviews →
          <span className='rr-remove-filters-link' onClick={ removeFilters }>remove filters</span>
        </div>
        }
        <BarGraph filterClick={ filterClick } star={ 5 } ratings={ metaData.ratings }/>
        <BarGraph filterClick={ filterClick } star={ 4 } ratings={ metaData.ratings }/>
        <BarGraph filterClick={ filterClick } star={ 3 } ratings={ metaData.ratings }/>
        <BarGraph filterClick={ filterClick } star={ 2 } ratings={ metaData.ratings }/>
        <BarGraph filterClick={ filterClick } star={ 1 } ratings={ metaData.ratings }/>
      </div>
      <div className='rr-percentage-recommended'>{calculatePercentage(metaData)}% of reviews recommend this product</div>
      <Scale name={'test'} value={ 5 } lowLabel={'low'} highLabel={'high'} />
    </div>
  )
};

export default ReviewsSummary;