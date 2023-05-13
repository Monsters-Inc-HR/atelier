import React from 'react';

const ReviewPhotos = ({ photos }) => {
  return (
    <div className='rr-review-photos'>
        { photos.map(p => <img className='rr-review-img' key={p.id} src={`${p.url}`} alt='a user provided photo' />) }
    </div>
  );
};

export default ReviewPhotos;