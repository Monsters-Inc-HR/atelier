import React, { useState } from 'react';
import StarBar from './StarBar.jsx';
import { format } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

const Review = ({ review }) => {
  const maxCollapsedChars = 250;
  const [collapsed, setCollapsed] = useState(review.body.length > maxCollapsedChars);
  return (
    <div className='rr-review'>
      <div className='rr-review-header'>
        <StarBar rating={ Number.parseFloat(review.rating).toFixed(2) } />
        <div className='rr-review-user-date'> {review.reviewer_name}, {format(new Date(review.date), 'MMMM d, y')} </div>
      </div>
      <div className='rr-review-summary'>{ review.summary }</div>
      {
        collapsed ?
        <div className='rr-review-body'>{ review.body.slice(0, maxCollapsedChars) }
          <button className='rr-review-show-more' onClick={() => setCollapsed(false) }>SHOW MORE</button>
        </div> :
        <div className='rr-review-body'>{ review.body }</div>
      }
      { review.recommend && <div className='rr-review-recommended'><FontAwesomeIcon icon={ icon({name: 'check', style: 'solid'}) } /> I recommend this product.</div> }
      { review.response && <div className='rr-review-seller-response'><b>Seller response:</b><br/><br/>{ review.response }</div> }
      <div className='rr-mark-helpful'></div>
      <hr />
    </div>
  );
};

export default Review;