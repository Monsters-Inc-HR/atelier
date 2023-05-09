import React from 'react';
import QuestionEntry from './QuestionEntry.jsx';




const QuestionList = ({questions, numOfQuestions, numOfAnswers}) => {



  return (
    <div style={{ borderStyle: 'solid', borderColor: 'grey' }}>
      {questions.slice(0, numOfQuestions).map((question, index) => (
      <QuestionEntry
        question={question}
        key={index}
        numOfAnswers={numOfAnswers}
      />))}
    </div>
  )
}

export default QuestionList