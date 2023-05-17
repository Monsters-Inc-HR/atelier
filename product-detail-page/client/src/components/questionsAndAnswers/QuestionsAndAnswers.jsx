import React, { useState, useEffect } from "react";
import Searchbar from "./Searchbar.jsx";
import QuestionList from "./QuestionList.jsx";
import AddQuestionModal from "./AddQuestionModal.jsx";
import AddAnswerModal from "./AddAnswerModal.jsx";
import { getQuestions } from "./controllerQ&A.js";

const QuestionsAndAnswers = ( { productID, productName }) => {


  const [questionsAPI, setQuestionsAPI] = useState([]);

  useEffect(() => {
    getQuestions(productID)
      .then(questData => {
        var questions = questData.results
        //sorts the array of question objects in order of helpfulness from high to low
        questions = questions.sort((a,b) => (b.question_helpfulness - a.question_helpfulness ));
        //setMaxNumOfQuestions(questions.length);
        setQuestionsAPI(questions);

      })
      .catch(err => console.log('there was an error getting the questions data ', err));
  }, [productID]);

  //sets default number of questions to display at 2
  const [numOfQuestions, setNumOfQuestions] = useState(2);

  const [searchQuery, setSearchQuery] = useState('');

  const moreAnsweredQuestionClick = () => {
    console.log('more answered questions clicked')
    //numOfQuestions < maxNumOfQuestions
    if (numOfQuestions < questionsAPI.length) {
      setNumOfQuestions(numOfQuestions + 2)
    }
  };

  //sets a boolean to show/hide add question modal
  const [addQuestionModalShow, setAddQuestionModalShow] = useState(false);

  const addQuestionModalClose = () => {
    setAddQuestionModalShow(false)
  }

  console.log('num ', numOfQuestions, '.length', questionsAPI.length)

  return (
    <div className="qa-questions-and-answers">
      <p>Questions and Answers</p>
      {questionsAPI.length? (
        <div>
          <Searchbar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/><br></br>
          <QuestionList questions={questionsAPI} numOfQuestions={numOfQuestions} searchQuery={searchQuery} productName={productName} />
          { (numOfQuestions < questionsAPI.length) ? <button onClick={moreAnsweredQuestionClick}>More Answered Questions</button> : null }
        </div>
      ) : null }
      <div><AddQuestionModal open={addQuestionModalShow} onClose={addQuestionModalClose} questions={questionsAPI} productName={productName} />
      <button onClick={()=>{setAddQuestionModalShow(true)}}>Add a question</button></div>
    </div>
    )

}

export default QuestionsAndAnswers





