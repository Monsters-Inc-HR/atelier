import React, { useState } from 'react';
import QuestionEntry from './QuestionEntry.jsx';
import QuestionsAndAnswers from "./QuestionsAndAnswers.jsx";




const QuestionList = ({questions, numOfQuestions, searchQuery}) => {



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
      />
      ))}

    </div>
  )
}

export default QuestionList

//{maxAnswersDisplayed ? (<a onClick={handleCollapseAnswersClick}>Collapse Answers</a>) : (<a onClick={handleMoreAnswersClick}>See more answers</a>)}