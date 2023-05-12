import React, { useState } from 'react';
import { format } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

const Review = ({ review }) => {
  //const [, ]
  return (
    <div className='rr-review'>
      <div className='rr-review-header'>
        <div className='rr-stars'>rating: { review.rating }</div>
        <div className='rr-review-user-date'> {review.reviewer_name}, {format(new Date(review.date), 'MMMM d, y')} </div>
      </div>
      <div className='rr-review-summary'>{ review.summary }</div>
      <div className='rr-review-body'>{ review.body }</div>
      { review.recommend && <div className='rr-review-recommended'><FontAwesomeIcon icon={ icon({name: 'check', style: 'solid'}) } /> I recommend this product.</div> }
      { review.response && <div className='rr-review-seller-response'><b>Seller response:</b><br/><br/>{ review.response }</div> }
      <div className='rr-mark-helpful'></div>
      <hr />
    </div>
  );
};

export default Review;