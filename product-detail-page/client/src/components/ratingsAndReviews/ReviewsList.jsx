import React from 'react';

const ReviewsList = ({ reviewsData }) => {
  return (
    <div className='rr-review-list'>
      <div className='rr-review-sorter'>{ reviewsData.results.length } of reviews, sorted by relevance/recency</div>
      <div>review</div>
      <div>review</div>
    </div>
  );
};

export default ReviewsList;