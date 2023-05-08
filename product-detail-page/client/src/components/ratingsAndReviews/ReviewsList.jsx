import React, {useState} from 'react';
import Review from './Review.jsx';

const ReviewsList = ({ reviewsData }) => {
  const [numOfDisplayedReviews, setNumOfDisplayedReviews] = useState(2);
  return (
    <div className='rr-reviews-list'>
      <div className='rr-review-sorter'>{ reviewsData.results.length } reviews, sorted by relevance/recency</div>
      {reviewsData.results.slice(0, numOfDisplayedReviews).map(review => <Review review={ review } />)}
    </div>
  );
};

export default ReviewsList;