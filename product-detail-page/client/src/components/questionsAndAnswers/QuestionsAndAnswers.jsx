import React, { useState, useEffect } from "react";
import Searchbar from "./Searchbar.jsx";
import QuestionList from "./QuestionList.jsx";
import AddQuestionModal from "./AddQuestionModal.jsx";
import AddAnswerModal from "./AddAnswerModal.jsx";
import { getQuestions } from "./controllerQ&A.js";

const QuestionsAndAnswers = ( { productID, productName }) => {


  const [questionsAPI, setQuestionsAPI] = useState([]);
  const [maxNumOfQuestions, setMaxNumOfQuestions] = useState(0);

  useEffect(() => {
    getQuestions(productID)
      .then(questData => {
        var questions = questData.results
        //sorts the array of question objects in order of helpfulness from high to low
        questions = questions.sort((a,b) => (b.question_helpfulness - a.question_helpfulness ));
        setMaxNumOfQuestions(questions.length);
        setQuestionsAPI(questions);

      })
      .catch(err => console.log('there was an error getting the questions data ', err));
  }, [productID]);

  //sets default number of questions to display at 2
  const [numOfQuestions, setNumOfQuestions] = useState(2);

  const [searchQuery, setSearchQuery] = useState('');

  const [questionRenderMax, setQuestionRenderMax] = useState(false);

  const moreAnsweredQuestionClick = () => {
    console.log(numOfQuestions, maxNumOfQuestions, numOfQuestions<maxNumOfQuestions)
    if (numOfQuestions < maxNumOfQuestions) {
      setNumOfQuestions(numOfQuestions + 2)
    } else {
      setQuestionRenderMax(true);
    }
  };

  //sets a boolean to show/hide add question modal
  const [addQuestionModalShow, setAddQuestionModalShow] = useState(false);

  const addQuestionModalClose = () => {
    setAddQuestionModalShow(false)
  }

  return (
    <div className="qa-questions-and-answers">
      <p>Questions and Answers</p>
      {questionsAPI.length? (
        <div>
          <Searchbar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/><br></br>
          <QuestionList questions={questionsAPI} numOfQuestions={numOfQuestions} searchQuery={searchQuery} productName={productName} />
          { (questionsAPI.length < 2 || numOfQuestions >= maxNumOfQuestions) ? null : <button onClick={moreAnsweredQuestionClick}>More Answered Questions</button>}
        </div>
      ) : null }
      <div><AddQuestionModal open={addQuestionModalShow} onClose={addQuestionModalClose} questions={questionsAPI} productName={productName} />
      <button onClick={()=>{setAddQuestionModalShow(true)}}>Add a question</button></div>
    </div>
    )

}

export default QuestionsAndAnswers



