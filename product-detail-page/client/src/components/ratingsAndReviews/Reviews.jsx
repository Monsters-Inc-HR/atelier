import React from 'react';
import ReviewsSummary from './ReviewsSummary.jsx';

const Reviews = () => {
  // Reviews Meta Data sample
  // GET /reviews/meta?product_id={integer id value}
  const reviewsMetaData = {
      "product_id": "37312",
      "ratings": {
          "1": "16",
          "2": "13",
          "3": "7",
          "4": "3",
          "5": "10"
      },
      "recommended": {
          "false": "5",
          "true": "44"
      },
      "characteristics": {
          "Quality": {
              "id": 125035,
              "value": "3.1428571428571429"
          }
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