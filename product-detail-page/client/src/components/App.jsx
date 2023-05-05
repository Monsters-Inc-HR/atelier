import React from 'react';
import RelatedItems from './relatedItems/relatedItems.jsx';
import Reviews from './ratingsAndReviews/reviews.jsx';
import QuestionsAndAnswers from './questionsAndAnswers/QuestionsAndAnswers.jsx';


const App = () => {

  return (
    <div>
      <RelatedItems/>
      <QuestionsAndAnswers/>
      <Reviews />
      <p>hey</p>
    </div>
  )
}

export default App;