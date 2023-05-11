import React, { useState } from 'react';
import AnswerEntry from './AnswerEntry.jsx';
import AddAnswerModal from "./AddAnswerModal.jsx";


const QuestionEntry = ({question}) => {

  //converts object of answers to an array of answers
  //individual answer objects still have an id property
  var answerObject = question.answers;
  var answers = [];
  for (var key in answerObject) {
    answers.push(answerObject[key]);
  }

  //sorts answers in terms of helpfulness from highest to lowest
  answers = answers.sort((a, b) => b.helpfulness - a.helpfulness);

  //sets default number of answers to display at 2
  const [numOfAnswers, setNumOfAnswers] = useState(2);

  const handleMoreAnswersClick = () => {
    if (!maxAnswersDisplayed) {
      setNumOfAnswers(numOfAnswers + 2);
    }

    if (numOfAnswers >= answers.length - 2) {
      setMaxAnswersDisplayed(true);
    }
    console.log(numOfAnswers);
  }

  const [maxAnswersDisplayed, setMaxAnswersDisplayed] = useState(false);

  const handleCollapseAnswersClick = () => {

    //console.log('clicked');
    setNumOfAnswers(0);
    setMaxAnswersDisplayed(false);
  }

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

  const [addAnswerModalShow, setAddAnswerModalShow] = useState(false);

  const addAnswerModalClose = () => {
    //console.log(userQuestion);
    setAddAnswerModalShow(false)
  }


  return (
    <div>
      <span>
        <div style={{ fontWeight: 'bold', fontSize: 'large'}}>
          {'Q: '}
          {question.question_body}
          {' Helpful? '}
          <a onClick={handleHelpfulQuestionClick}>Yes ({questionHelpfulness})</a>
          {' | '}
          <AddAnswerModal open={addAnswerModalShow} onClose={addAnswerModalClose}/>
          <a onClick={()=>{setAddAnswerModalShow(true)}}>Add Answer</a>
        </div>
        {answers.slice(0, numOfAnswers).map((answer, index) => (
          <AnswerEntry answer={answer} key={index} />
        ))}
      </span>
      {maxAnswersDisplayed ? (<a onClick={handleCollapseAnswersClick}>Collapse Answers</a>) : (<a onClick={handleMoreAnswersClick}>See more answers</a>)}

    </div>
  )
}

export default QuestionEntry

