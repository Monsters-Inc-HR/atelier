import React from 'react';
import RelatedItems from './relatedItems/relatedItems.jsx';
import Reviews from './ratingsAndReviews/reviews.jsx';
import QuestionsAndAnswers from './questionsAndAnswers/QuestionsAndAnswers.jsx';
import Overview from './overview/Overview.jsx';

//
const App = () => {

  return (
    <div>
      <Overview data-testid="overview" />
      <RelatedItems data-testid="related-items"/>
      <QuestionsAndAnswers data-testid="questions-and-answers"/>
      <Reviews data-testid="reviews"/>
    </div>
  )
}

export default App;