import React, { useState, useEffect } from 'react';
import Review from './Review.jsx';

const ReviewsList = ({ reviews, sortList }) => {
  const [displayCount, setDisplayCount] = useState(2);
  const aReview = {
              "review_id": 592803,
              "rating": 2,
              "summary": "Aliquid nihil enim eum et dolorem qui cum eaque qui.",
              "recommend": true,
              "response": "\"Commodi dolorem eum nesciunt vel ullam in voluptas.\"",
              "body": "Sint ipsam voluptas voluptatem magni magni. Molestiae maxime et asperiores quia pariatur repellat. Quasi laborum ipsum et unde. Repellendus aut ut quia maxime neque iusto.",
              "date": "2020-08-30T00:00:00.000Z",
              "reviewer_name": "Bonnie.Robel37",
              "helpfulness": 29,
              "photos": [
                  {
                      "id": 1106420,
                      "url": "https://images.unsplash.com/photo-1554774853-d50f9c681ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
                  }
              ]
            };
  return (
    <div className='rr-reviews-list'>
      <div className='rr-review-sorter'>
        { reviews.length } reviews, <label htmlFor='rr-sort-select'>sorted by most</label>
        <select onChange={ (e) => sortList(e.target.value) } style={{display: 'inline'}} name='sort-by' id='rr-sort-select'>
          <option value='relevant' defaultValue>relevant</option>
          <option value='helpful'>helpful</option>
          <option value='recent'>recent</option>
        </select>
      </div>
      <Review review={ aReview } />
      {reviews.slice(0, displayCount)
        .map(review => <Review key={ review.review_id } review={ review } />)}
      {displayCount < reviews.length && <button onClick={ () => setDisplayCount(displayCount + 2)}>MORE REVIEWS</button>}
      <button>ADD A REVIEW  +</button>
    </div>
  );
};

export default ReviewsList;