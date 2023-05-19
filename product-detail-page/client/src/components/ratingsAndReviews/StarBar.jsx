import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

const StarBar = ({ rating }) => {
  let fullStars = Math.floor(rating);
  let quarterStars = Math.round((rating - fullStars) / .25);  // get decimal part of rating. see how many .25s fit in it, rounded to nearest integer.
  if (quarterStars === 4) {  // account for ratings like 2.9, which will yield 2 full stars and 4 quarter stars. convert 4 quarter stars into 1 full star.
    fullStars += 1;
    quarterStars = 0;
  }
  const makeKeyGenerator = () => {
    let val = 0;
    return () => (val + 1);
  }
  const getKey = makeKeyGenerator();
  const stars = Array(5);
  stars.fill(<FontAwesomeIcon key={ getKey() } icon={ icon({name: 'star', style: 'solid'}) } />, 0, fullStars);  // fill from 0 up to rating index with solid stars
  // if there are quarter stars, add a layered icon; otherwise, add an empty star
  stars[fullStars] = (quarterStars > 0) ? (
    <span className='fa-layers fa-fw'>
      <FontAwesomeIcon key={ getKey() } icon={ icon({name: 'star', style: 'regular'}) } />
      <FontAwesomeIcon key={ getKey() } className={`rr-star-filled-${quarterStars}-4`} icon={ icon({name: 'star', style: 'solid'}) } />
    </span>
  ) : (
    <FontAwesomeIcon key={ getKey() } icon={ icon({name: 'star', style: 'regular'}) } />
  )
  stars.fill(<FontAwesomeIcon key={ getKey() } icon={ icon({name: 'star', style: 'regular'}) } />, fullStars + 1);   // fill remaining spots with empty stars

  return (
    <div className='rr-star-bar'>
      { stars }
    </div>
  )
}

export default StarBar;