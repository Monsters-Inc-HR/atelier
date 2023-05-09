import React, {useState} from 'react';
import Review from './Review.jsx';

const ReviewsList = ({ reviewsData }) => {
  const [results, setResults] = useState(reviewsData.results);
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