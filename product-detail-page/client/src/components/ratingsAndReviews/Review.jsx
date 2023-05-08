import React from 'react';
import { format } from 'date-fns';

const Review = ({ review }) => {
  return (
    <div className='rr-review'>
      <div className='rr-review-header'>
        <div className='rr-stars'>rating: { review.rating }</div>
        <div className='rr-review-user-date'> {review.reviewer_name}, {format(new Date(review.date), 'MMMM d, y')} </div>
      </div>
      <div className='rr-review-summary'>{ review.summary }</div>
      <div className='rr-review-body'>{ review.body }</div>
      { review.recommend && <div className='rr-review-recommended'>✔️ I recommend this product.</div> }
      { review.response && <div className='rr-review-seller-response'>{ review.response }</div> }
      <div className='rr-mark-helpful'></div>
      <hr />
    </div>
  );
};

export default Review;