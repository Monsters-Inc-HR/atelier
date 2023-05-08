import React, {useState} from 'react';
import Review from './Review.jsx';

const ReviewsList = ({ reviewsData }) => {
  return (
    <div className='rr-review-list'>
      <div className='rr-review-sorter'>{ reviewsData.results.length } of reviews, sorted by relevance/recency</div>
      <Review />
      <Review />
    </div>
  );
};

export default ReviewsList;