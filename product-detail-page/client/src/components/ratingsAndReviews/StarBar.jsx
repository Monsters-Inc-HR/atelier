import React from 'react';

const StarBar = ({star, ratings}) => {
  const totalNumOfRatings = Object.values(ratings).reduce((sum, countForEachStar) => sum + parseInt(countForEachStar), 0);
  const ratioToDisplay = parseInt(ratings[star]) / totalNumOfRatings;
  const positivePercentageString = String.toString(Math.round(ratioToDisplay*100)) + '%';
  const negativePercentageString = String.toString(Math.round((1 - ratioToDisplay)*100)) + '%';
  return (
    <div className='rr-star-bar'>
      <div>{star} stars</div>
      <div className='rr-star-bar-100'>
        <div className='rr-star-bar-positive' style={{width: positivePercentageString}}></div>
        <div className='rr-star-bar-negative' style={{width: negativePercentageString}}></div>
      </div>
    </div>
  );
};

export default StarBar;