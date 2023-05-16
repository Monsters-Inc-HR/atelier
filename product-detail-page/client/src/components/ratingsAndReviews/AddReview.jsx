import React, { useState } from 'react';

const AddReview = () => {

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
          <div class="rr-form-field">
            <label for="name">Enter your name: </label>
            <input type="text" name="name" id="name" required />
          </div>
        </form>

      </ReviewsModal>
    }
    </div>
  )
}

export default AddReview;