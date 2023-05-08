import React from 'react';

const Review = ({ review }) => {
  return (
    <div className='rr-review'>
      <div className='rr-review-header'></div>
      <div className='rr-review-summary'>{ review.summary }</div>
      <div className='rr-review-body'>{ review.body }</div>
      <div className='rr-review-recommended'></div>
      <div className='rr-review-seller-response'></div>
      <div className='rr-mark-helpful'></div>
    </div>
  );
};

export default Review;