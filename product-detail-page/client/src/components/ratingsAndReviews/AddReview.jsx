import React, { useState } from 'react';
import ReviewsModal from './ReviewsModal.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

const AddReview = ({ productID }) => {
  const [addingReview, setAddingReview] = useState(false);
  return (
    <div>
    {!addingReview ? <button onClick={() => setAddingReview(true)}>ADD A REVIEW  +</button> :
      <ReviewsModal visible={ addingReview }>
        <div className='rr-full-screen-modal-close-container'>
          <div className='rr-full-screen-modal-close' onClick={() => setAddingReview(false)}>
            <span>close</span><FontAwesomeIcon icon={ icon({name: 'circle-xmark', style: 'solid'}) } />
          </div>
        </div>
        <h1>Write Your Review</h1>
        <h3>About </h3>

        <form className='rr-add-review'>
          <div className='rr-form-field'>
            <fieldset>
              <legend>Do you recommend this product? </legend>
              <div>
                <input type='radio' id='recommend-yes' value='yes' />
                <label htmlFor='recommend-yes'>Yes</label>

                <input type='radio' id='recommend-no' value='no' />
                <label htmlFor='recommend-no'>No</label>
              </div>
            </fieldset>
            <fieldset>
              <legend>Write your review</legend>

              <label htmlFor='review-summary'>Review summary: </label>
              <input type='text' id='review-summary' name='review-summary' placeholder='Example: A must-buy product for anyone' size='50' required></input>

              <label htmlFor='review-body'>Review body: </label>
              <textarea id='review-body' name='review-body' placeholder='Why did you like the product or not?' minlength='50' required></textarea>
            </fieldset>
          </div>
        </form>

      </ReviewsModal>
    }
    </div>
  )
}

export default AddReview;