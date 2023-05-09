import React, { useState, useEffect } from 'react';
import Review from './Review.jsx';

const ReviewsList = ({ reviews }) => {
  const [displayCount, setDisplayCount] = useState(2);

  return (
    <div className='rr-reviews-list'>
      <div className='rr-review-sorter'>{ reviews.length } reviews, <label for='sort-select'>sorted by most</label>
        <select style={{display: 'inline'}} name='sort-by' id='sort-select'>
          <option value='relevance' selected>relevant</option>
          <option value='helpfulness'>helpful</option>
          <option value='recency'>recent</option>
        </select>
      </div>
      {reviews.slice(0, displayCount)
        .map(review => <Review key={ review.review_id } review={ review } />)}
      {displayCount < reviews.length && <button onClick={ () => setDisplayCount(displayCount + 2)}>MORE REVIEWS</button>}
      <button>ADD A REVIEW  +</button>
    </div>
  );
};

export default ReviewsList;