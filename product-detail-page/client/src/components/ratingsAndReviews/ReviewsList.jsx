import React, { useState, useEffect } from 'react';
import Review from './Review.jsx';

const ReviewsList = ({ reviewsData, filters }) => {
  const [results, setResults] = useState(filters.length === 0 ? reviewsData.results : reviewsData.results.filter(review => filters.includes(review.rating)));
  const [displayCount, setDisplayCount] = useState(2);

  return (
    <div className='rr-reviews-list'>
      <div className='rr-review-sorter'>{ results.length } reviews, sorted by relevance/recency</div>
      {results.slice(0, displayCount).map(review => <Review key={ review.review_id } review={ review } />)}
      {displayCount < results.length && <button onClick={ () => setDisplayCount(displayCount + 2)}>MORE REVIEWS</button>}
      <button>ADD A REVIEW  +</button>
    </div>
  );
};

export default ReviewsList;