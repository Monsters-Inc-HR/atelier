import React, { useState } from "react";
import Searchbar from "./Searchbar.jsx";
import QuestionList from "./QuestionList.jsx";

var apiQuestData = {
  "product_id": "37312",
  "results": [
      {
          "question_id": 640799,
          "question_body": "where can I find this product?",
          "question_date": "2022-05-19T00:00:00.000Z",
          "asker_name": "Mustard Fancy",
          "question_helpfulness": 5,
          "reported": false,
          "answers": {
              "5987082": {
                  "id": 5987082,
                  "body": "blahblah test",
                  "date": "2022-07-22T00:00:00.000Z",
                  "answerer_name": "Seller",
                  "helpfulness": 5,
                  "photos": []
              },
              "5989786": {
                  "id": 5989786,
                  "body": "stuff. This is an orchid.",
                  "date": "2022-12-14T00:00:00.000Z",
                  "answerer_name": "orchid daddy",
                  "helpfulness": 10,
                  "photos": [
                      "https://res.cloudinary.com/db2wefzgf/image/upload/v1671055201/FECimages/jmrbhm4b3o5mhf7lbb77.webp"
                  ]
              },
              "5990801": {
                  "id": 5990801,
                  "body": "this is a test??? why would you answer that",
                  "date": "2023-02-11T00:00:00.000Z",
                  "answerer_name": "answerer",
                  "helpfulness": 0,
                  "photos": []
              },
              "5991445": {
                  "id": 5991445,
                  "body": "ad;lskjfsl;djfef",
                  "date": "2023-03-31T00:00:00.000Z",
                  "answerer_name": "asdfdf",
                  "helpfulness": 0,
                  "photos": [
                      "blob:http://localhost:3000/4c2a8f26-0b5c-451a-b487-841e5fe440cc"
                  ]
              }
          }
      }
  ]
}

//need to know the current product displayed to know which questions to display

const QuestionsAndAnswers = () => {

  //sets default number of questions to display at 2
  const [numOfQuestions, setNumOfQuestions] = useState(2);

    //sets default number of answers to display at 2
    const [numOfAnswers, setNumOfAnswers] = useState(2);




  var questions = apiQuestData.results;

  //sorts the array of question objects in order of helpfulness from high to low
  questions = questions.sort((a,b) => (b.question_helpfulness - a.question_helpfulness ));

  //toggle for testing purposes when array of questions is empty
  //questions = [];

  const moreAnsweredQuestionClick = () => {setNumOfQuestions(numOfQuestions + 2)}

  return (
    <div style={{ borderStyle: 'solid', borderColor: 'grey' }}>
      <p>Questions and Answers</p>
      {questions.length ? (
        <>
          <Searchbar />
          <QuestionList questions={questions} numOfQuestions={numOfQuestions} numOfAnswers={numOfAnswers}/>
          <button onClick={moreAnsweredQuestionClick}>More Answered Questions</button></>
      ) : (<></>) }
      <button>Add a question</button>
    </div>
    )

}


export default QuestionsAndAnswers