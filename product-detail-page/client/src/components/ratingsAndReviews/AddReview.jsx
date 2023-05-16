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
              <legend>Do you recommend this product?</legend>
              <div>
                <input type='radio' id='recommend-yes' value='yes' />
                <label for='recommend-yes'>Yes</label>

                <input type='radio' id='recommend-no' value='no' />
                <label for='recommend-no'>No</label>
              </div>
            </fieldset>
          </div>
        </form>

      </ReviewsModal>
    }
    </div>
  )
}

export default AddReview;