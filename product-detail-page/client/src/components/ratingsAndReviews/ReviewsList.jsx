import React, { useState, useEffect } from 'react';
import Review from './Review.jsx';
import ReviewsModal from './ReviewsModal.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

const ReviewsList = ({ reviews, sortList }) => {
  const [displayCount, setDisplayCount] = useState(2);
  const [addingReview, setAddingReview] = useState(false);
  return (
    <div className='rr-reviews-list' style={{maxHeight: Math.round(document.querySelector('html').clientHeight * .95)}}>
      <div className='rr-review-sorter'>
        { reviews.length } reviews, <label htmlFor='rr-sort-select'>sorted by most</label>
        <select onChange={ (e) => sortList(e.target.value) } style={{display: 'inline'}} name='sort-by' id='rr-sort-select'>
          <option value='relevant' defaultValue>relevant</option>
          <option value='helpful'>helpful</option>
          <option value='recent'>recent</option>
        </select>
      </div>
      <div className='rr-reviews-list-all-reviews'>
      {reviews.slice(0, displayCount)
        .map(review => <Review key={ review.review_id } review={ review } />)}
      </div>
      <div className='rr-reviews-list-buttons'>
        {displayCount < reviews.length && <button onClick={ () => setDisplayCount(displayCount + 2)}>MORE REVIEWS</button>}
      </div>
    </div>
  );
};

export default ReviewsList;