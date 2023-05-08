import React from 'react';

const Review = ({ review }) => {
  return (
    <div className='rr-review'>
      <div className='rr-review-header'></div>
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