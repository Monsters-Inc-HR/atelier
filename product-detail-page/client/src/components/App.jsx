import React from 'react';
import RelatedItems from './relatedItems/relatedItems.jsx';
import Ratings from './ratingsAndReviews/ratings.jsx';
import QuestionsAndAnswers from './questionsAndAnswers/QuestionsAndAnswers.jsx';
import Overview from './overview/Overview.jsx';


const App = () => {

  return (
    <div>
      <Overview />
      <RelatedItems/>
      <QuestionsAndAnswers/>
      <Ratings />

    </div>
  )
}

export default App;