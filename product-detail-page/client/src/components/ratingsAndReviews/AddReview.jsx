import React, { useState } from 'react';
import ReviewsModal from './ReviewsModal.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

const starPositions = [1, 2, 3, 4, 5];
const starsExplanation = ['', 'Poor', 'Fair', 'Average', 'Good', 'Great!'];
const characteristicLabels = {
  'Size': ['', 'A size too small', '½ a size too small', 'Perfect', '½ a size too big', 'A size too wide'],
  'Width': ['', 'Too narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too wide'],
  'Comfort': ['', 'Uncomfortable', 'Slightly uncomfortable', 'OK', 'Comfortable', 'Perfect'],
  'Quality': ['', 'Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'],
  'Length': ['', 'Runs short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'],
  'Fit': ['', 'Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly big', 'Runs big']
};
const emptyStar = (<FontAwesomeIcon icon={ icon({name: 'star', style: 'regular'}) } />);
const filledStar = (<FontAwesomeIcon icon={ icon({name: 'star', style: 'solid'}) } />);

const AddReview = ({ productID, productName, characteristics }) => {
  const [addingReview, setAddingReview] = useState(false);
  const [photoCount, setPhotoCount] = useState(0);
  const [starCount, setStarCount] = useState(0);

  return (
    <div>
    {!addingReview ? <button onClick={ () => setAddingReview(true) }>ADD A REVIEW  +</button> :
      <ReviewsModal visible={ addingReview }>
        <div className='rr-full-screen-modal-close-container'>
          <div className='rr-full-screen-modal-close' onClick={() => setAddingReview(false)}>
            <span>close</span><FontAwesomeIcon icon={ icon({name: 'circle-xmark', style: 'solid'}) } />
          </div>
        </div>
        <h1>Write Your Review</h1>
        <h3>About { productName } </h3>

        <form className='rr-add-review'>
          <fieldset>
            <legend>Overall rating</legend>
            <div className='rr-add-review-stars'>
              { starPositions.map(pos => {
                  return (
                    <div key={pos} className='rr-add-review-star' onClick={ () => setStarCount(starCount === pos ? 0 : pos) }>
                      { starCount >= pos ? filledStar : emptyStar }
                    </div>
                  )
                })
              }
              <div className='rr-add-review-overall-explanatory-note'>{ starCount > 0 && starsExplanation[starCount] }</div>
            </div>
          </fieldset>
          <fieldset>
            <legend>Do you recommend this product?</legend>
            <div>
              <input type='radio' name='recommend' id='recommend-yes' value='yes' />
              <label htmlFor='recommend-yes'>Yes</label>

              <input type='radio' name='recommend' id='recommend-no' value='no' />
              <label htmlFor='recommend-no'>No</label>
            </div>
          </fieldset>
          <fieldset>
            <legend>Characteristics</legend>
            { characteristics.map(charName => {
              const lowerName = charName.toLowerCase();
              return (
                <div className='rr-add-review-row-characteristic'>
                  <div className='rr-add-review-characteristic-row-label'>
                    <label htmlFor={`${lowerName}`}>{ `${charName}: ` }</label>
                  </div>
                  <div className='rr-add-review-characteristic-row-content'>
                    <div className='rr-add-review-row-characteristic-selection'>
                      {  }
                    </div>
                    <div className='rr-add-review-row-characteristic-buttons'>
                      <input type='radio' name={`${lowerName}`} id={`${lowerName}-0`} value='0' />
                      <input type='radio' name={`${lowerName}`} id={`${lowerName}-1`} value='1' />
                    </div>
                    <div className='rr-add-review-row-characteristic-low-high-labels'>
                      <div className='rr-add-review-row-characteristic-low-label'>{`${characteristicLabels[charName][1]}`}</div>
                      <div className='rr-add-review-row-characteristic-high-label'>{`${characteristicLabels[charName][5]}`}</div>
                    </div>
                  </div>
                </div>
              )
            })}
          </fieldset>
          <fieldset>
            <legend>Write your review</legend>

            <label htmlFor='rr-add-review-summary'>Review summary: </label>
            <input type='text' id='rr-add-review-summary' name='rr-add-review-summary' placeholder='Example: A must-buy product for anyone' size='50' maxLength='60' required></input>

            <label htmlFor='rr-add-review-body'>Review body: </label>
            <textarea id='rr-add-review-body' name='rr-add-review-body' placeholder='Why did you like the product or not?' minLength='50' required></textarea>

            <label htmlFor='rr-add-review-photos'>Add a photo to your review: </label>
            <input type='file' id='rr-add-review-photos' name='rrr-add-review-photos' accept='image/*' multiple></input>

          </fieldset>
          <fieldset>
            <legend>Your information</legend>

            <label htmlFor='rr-add-review-nickname'>What is your nickname? </label>
            <input type='text' id='rr-add-review-nickname' name='rr-add-review-nickname' placeholder='Example: jackson11' size='30' maxlength='60' required></input>
            <span className='rr-review-form-explanatory-note'>For privacy reasons, do not use your full name or email address</span>

            <label htmlFor='rr-add-review-email'>What is your email? </label>
            <input type='email' id='rr-add-review-email' name='rr-add-review-email' placeholder='Example: jackson11@email.com' required></input>
            <span className='rr-review-form-explanatory-note'>For authentication reasons, you will not be emailed</span>
          </fieldset>
        </form>

      </ReviewsModal>
    }
    </div>
  )
}

export default AddReview;