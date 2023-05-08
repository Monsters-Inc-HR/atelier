import React, { useState } from "react";
import Searchbar from "./Searchbar.jsx";
import QuestionList from "./QuestionList.jsx";

var apiQuestData = {
  "product_id": "5",
  "results": [{
        "question_id": 37,
        "question_body": "Why is this product cheaper here than other sites?",
        "question_date": "2018-10-18T00:00:00.000Z",
        "asker_name": "williamsmith",
        "question_helpfulness": 4,
        "reported": false,
        "answers": {
          68: {
            "id": 68,
            "body": "We are selling it here without any markup from the middleman!",
            "date": "2018-08-18T00:00:00.000Z",
            "answerer_name": "Seller",
            "helpfulness": 4,
            "photos": []
            // ...
          }
        }
      },
      {
        "question_id": 38,
        "question_body": "How long does it last?",
        "question_date": "2019-06-28T00:00:00.000Z",
        "asker_name": "funnygirl",
        "question_helpfulness": 2,
        "reported": false,
        "answers": {
          70: {
            "id": 70,
            "body": "Some of the seams started splitting the first time I wore it!",
            "date": "2019-11-28T00:00:00.000Z",
            "answerer_name": "sillyguy",
            "helpfulness": 6,
            "photos": [],
          },
          78: {
            "id": 78,
            "body": "9 lives",
            "date": "2019-11-12T00:00:00.000Z",
            "answerer_name": "iluvdogz",
            "helpfulness": 31,
            "photos": [],
          }
        }
      },
      // ...
  ]

}

//need to know the current product displayed to know which questions to display

const QuestionsAndAnswers = () => {

  //sets default number of questions to display at 4
  const [numOfQuestions, setNumOfQuestions] = useState(4);


  var questions = apiQuestData.results;

  //sorts the array of question objects in order of helpfulness from high to low
  questions = questions.sort((a,b) => (b.question_helpfulness - a.question_helpfulness ));
  //questions = [];



  return (<div style={{ borderStyle: 'solid', borderColor: 'grey' }}>
    <p>Questions and Answers</p>
    {questions.length ? (<><QuestionList questions={questions} numOfQuestions={numOfQuestions}/><button>More Answered Questions</button></>) : (<></>) }
    <button>Add a question</button>
    </div>
    )

}


export default QuestionsAndAnswers