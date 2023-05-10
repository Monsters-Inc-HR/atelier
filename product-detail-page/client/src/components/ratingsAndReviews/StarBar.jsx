import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

const StarBar = ({ rating }) => {
  const stars = Array(rating).fill(<FontAwesomeIcon icon={ icon({name: 'star'}) } />);
  return (
    <div className='rr-star-bar'>
      { stars }
    </div>
  )
}

export default StarBar;