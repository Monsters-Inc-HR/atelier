import React from 'react';
import ReviewsSummary from './ReviewsSummary.jsx';

const Reviews = () => {
  // Reviews Meta Data sample
  // GET /reviews/meta/product_id={integer id value}
  const reviewsMetaData = {
    "product_id": "2",
    "ratings": {
      1: 10,
      2: 1,
      3: 1,
      4: 2,
    },
    "recommended": {
      0: 5
    },
    "characteristics": {
      "Size": {
        "id": 14,
        "value": "4.0000"
      },
      "Width": {
        "id": 15,
        "value": "3.5000"
      },
      "Comfort": {
        "id": 16,
        "value": "4.0000"
      },
    }
  }

  return (
    <div className='ratings-and-reviews'>
      <div className='rr-title'>RATINGS & REVIEWS</div>
      <div className='rr-content'>
        <ReviewsSummary metaData={ reviewsMetaData } />
        <div className='rr-review-list'>review list</div>
      </div>
    </div>
  )
}

export default Reviews;