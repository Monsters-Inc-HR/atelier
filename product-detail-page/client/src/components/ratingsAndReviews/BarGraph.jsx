import React from 'react';

const BarGraph = ({star, ratings}) => {
  const totalNumOfRatings = Object.values(ratings).reduce((sum, countForEachStar) => sum + parseInt(countForEachStar), 0);
  const countForStar = ratings[star] || 0; // get the count for this star; if it doesn't exist, assume it is 0
  const ratioToDisplay = parseInt(countForStar) / totalNumOfRatings;
  const positivePercentageString = Math.round(ratioToDisplay*100) + '%';
  const negativePercentageString = Math.round((1 - ratioToDisplay)*100) + '%';
  return (
    <div className='rr-star-bar'>
      <div className='rr-star-bar-text'>{star} star{star > 1 && 's'}</div>
      <div className='rr-star-bar-100'>
        <div className='rr-star-bar-positive' style={{width: positivePercentageString}}></div>
        <div className='rr-star-bar-negative' style={{width: negativePercentageString}}></div>
      </div>
    </div>
  );
};

export default BarGraph;