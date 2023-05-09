import React, { useState } from 'react';
import QuestionEntry from './QuestionEntry.jsx';




const QuestionList = ({questions, numOfQuestions, searchQuery}) => {

  //sets default number of answers to display at 2
  const [numOfAnswers, setNumOfAnswers] = useState(2);

  const handleMoreAnswersClick = () => {
    setNumOfAnswers(numOfAnswers + 2);
  }

  const [maxAnswersDisplayed, setMaxAnswersDisplayed] = useState(false);

  // const handleCollapseAnswersClick = () => {

  //   //console.log('clicked');
  //   setNumOfAnswers(2);
  //   setMaxAnswersDisplayed(false);
  // }

  return (
    <div style={{ borderStyle: 'solid', borderColor: 'grey' }}>
      {questions.slice(0, numOfQuestions).filter((question)=>{ return question.question_body.includes(searchQuery)}).map((question, index) => (
      <QuestionEntry
        question={question}
        key={index}
        numOfAnswers={numOfAnswers}
      />))}
      {maxAnswersDisplayed ? (<a onClick={handleCollapseAnswersClick}>Collapse Answers</a>) : (<a onClick={handleMoreAnswersClick}>See more answers</a>)}
    </div>
  )
}

export default QuestionList
