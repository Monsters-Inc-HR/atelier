import React, { useState } from 'react';
import AnswerEntry from './AnswerEntry.jsx';


const QuestionEntry = ({question, numOfAnswers}) => {

  //converts object of answers to an array of answers
  //individual answer objects still have an id property
  var answerObject = question.answers;
  var answers = [];
  for (var key in answerObject) {
    answers.push(answerObject[key]);
  }

  //sorts answers in terms of helpfulness from highest to lowest
  answers = answers.sort((a, b) => b.helpfulness - a.helpfulness);

  //initializes question helpfulness to value from data
  const [questionHelpfulness, setQuestionHelpfulness] = useState(question.question_helpfulness)
  const [questHelpfulClicked, setQuestHelpfulClicked] = useState(false);

  //increments question helpfulness only once on user click
  const handleHelpfulQuestionClick = () => {
    if (!questHelpfulClicked) {
      setQuestionHelpfulness(questionHelpfulness + 1);
      setQuestHelpfulClicked(true);
    }
  };


  return (
    <div>
      <span>
        <p>
          {'Q: '}
          {question.question_body}
          {' Helpful? '}
          <a onClick={handleHelpfulQuestionClick}>Yes ({questionHelpfulness})</a>
          {' | '}
          <a>Add Answer</a>
        </p>
        {answers.slice(0, numOfAnswers).map((answer, index) => (
          <AnswerEntry answer={answer} key={index} />
        ))}

      </span>

    </div>
  )
}

export default QuestionEntry