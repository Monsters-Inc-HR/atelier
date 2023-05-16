import React, { useState } from 'react';
import QuestionEntry from './QuestionEntry.jsx';
import QuestionsAndAnswers from "./QuestionsAndAnswers.jsx";

const QuestionList = ({questions, numOfQuestions, searchQuery}) => {

  console.log('questions in questionlist', questions);

  return (
    <div>
      {questions.slice(0, numOfQuestions).filter((question)=>{ return question.question_body.includes(searchQuery.toLowerCase())}).map((question, index) => (
      <QuestionEntry
        question={question}
        key={index}
      />
      ))}
    </div>
  )
}

export default QuestionList


//toLowerCase()
