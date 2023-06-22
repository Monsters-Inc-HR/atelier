import React, { useState } from 'react';
import ReviewsModal from './ReviewsModal.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

const ReviewPhoto = ({ url }) => {
  const [viewing, setViewing] = useState(false);
  const altText = 'a user provided photo';
  return (
    <>
    <img className='rr-review-img' src={ url } alt={ altText } onClick={() => setViewing(true)}></img>
    <ReviewsModal visible={ viewing }>
      <div className='rr-full-screen-modal-close-container'>
        <div className='rr-full-screen-modal-close' onClick={() => setViewing(false)}>
          <span>close</span><FontAwesomeIcon icon={ icon({name: 'circle-xmark', style: 'solid'}) } />
        </div>
      </div>
      <img className='rr-full-screen-modal-image' src={ url } alt={ altText } ></img>
    </ReviewsModal>
    </>
  );
};

export default ReviewPhoto;