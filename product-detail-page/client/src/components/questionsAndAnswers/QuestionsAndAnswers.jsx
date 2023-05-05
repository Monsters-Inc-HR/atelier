import React from "react";
import Searchbar from "./Searchbar.jsx";
import QuestionList from "./QuestionList.jsx";

const QuestionsAndAnswers = () => {
  return (<div style={{ borderStyle: 'solid', borderColor: 'grey' }}>
    Questions and Answers div
    <Searchbar />
    <QuestionList />
    <button>Add an answer</button>
    </div>)
}


export default QuestionsAndAnswers