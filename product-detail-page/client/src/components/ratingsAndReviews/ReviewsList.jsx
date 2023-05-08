import React, {useState} from 'react';
import Review from './Review.jsx';

const ReviewsList = ({ reviewsData }) => {
  const [numOfDisplayedReviews, setNumOfDisplayedReviews] = useState(2);
  return (
    <div className='rr-reviews-list'>
      <div className='rr-review-sorter'>{ reviewsData.results.length } reviews, sorted by relevance/recency</div>
      {reviewsData.results.slice(0, numOfDisplayedReviews).map(review => <Review key={ review.review_id } review={ review } />)}
      {numOfDisplayedReviews < reviewsData.results.length && <button onClick={ () => setNumOfDisplayedReviews(numOfDisplayedReviews + 2)}>MORE REVIEWS</button>}
      <button>ADD A REVIEW  +</button>
    </div>
  );
};

export default ReviewsList;