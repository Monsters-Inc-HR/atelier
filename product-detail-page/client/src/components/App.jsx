import React from 'react';
import RelatedItems from './relatedItems/relatedItems.jsx';
import Reviews from './ratingsAndReviews/reviews.jsx';
import QuestionsAndAnswers from './questionsAndAnswers/QuestionsAndAnswers.jsx';
import Overview from './overview/Overview.jsx';


const App = () => {

  return (
    <div>
      <Overview />
      <RelatedItems/>
      <QuestionsAndAnswers/>
      <Reviews />
    </div>
  )
}

export default App;