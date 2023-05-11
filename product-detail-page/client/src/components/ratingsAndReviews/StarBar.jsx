import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

const StarBar = ({ rating }) => {
  const stars = Array(5);
  stars.fill(<FontAwesomeIcon icon={ icon({name: 'star', style: 'solid'}) } />, 0, rating);  // fill from 0 up to rating index with solid stars
  stars.fill(<FontAwesomeIcon className='rr-star-filled-25' icon={ icon({name: 'star', style: 'regular'}) } />, rating);   // fill from rating index to end with empty stars

  // useEffect(() => {
  //   const clip = document.createElementNS('http://www.w3.org/2000/svg', 'clipPath');
  //   clip.id = 'rr-clipper-1';
  //   const rect = document.createElement('rect');
  //   rect.setAttribute('x', 0);
  //   rect.setAttribute('y', 0);
  //   rect.setAttribute('width', '75%');
  //   rect.setAttribute('height', '100%');
  //   clip.appendChild(rect);

  //   // const use = document.createElement('use');
  //   // use.setAttribute('clip-path', 'url(#rr-clipper-1)');
  //   // use.setAttribute('href', '1')

  //   const targetSVG = document.getElementById('1');
  //   targetSVG.querySelector('path').setAttribute('clip-path', 'url(#rr-clipper-1)');
  //   targetSVG.appendChild(clip);
  //   //targetSVG.appendChild(use);
  // }, []);

  return (
    <div className='rr-star-bar'>
      { stars }
    </div>
  )
}

export default StarBar;