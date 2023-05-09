import React, { useState } from "react";
import Searchbar from "./Searchbar.jsx";
import QuestionList from "./QuestionList.jsx";
import AddQuestionModal from "./AddQuestionModal.jsx";

var apiQuestData = {
  "product_id": "37315",
  "results": [
      {
          "question_id": 642268,
          "question_body": "How does this fit?",
          "question_date": "2022-07-19T00:00:00.000Z",
          "asker_name": "John Doe",
          "question_helpfulness": 8,
          "reported": false,
          "answers": {
              "5988392": {
                  "id": 5988392,
                  "body": "It fits to size",
                  "date": "2022-09-09T00:00:00.000Z",
                  "answerer_name": "Grasscow",
                  "helpfulness": 8,
                  "photos": []
              },
              "5988393": {
                  "id": 5988393,
                  "body": "Fits great",
                  "date": "2022-09-09T00:00:00.000Z",
                  "answerer_name": "Firedog",
                  "helpfulness": 3,
                  "photos": []
              },
              "5991135": {
                  "id": 5991135,
                  "body": "Is this working?",
                  "date": "2023-03-24T00:00:00.000Z",
                  "answerer_name": "DJK",
                  "helpfulness": 0,
                  "photos": []
              }
          }
      },
      {
          "question_id": 592660,
          "question_body": "123",
          "question_date": "2022-04-04T00:00:00.000Z",
          "asker_name": "123",
          "question_helpfulness": 4,
          "reported": false,
          "answers": {
              "5990614": {
                  "id": 5990614,
                  "body": "How long can I wear these clothes? They seem pretty durable",
                  "date": "2023-02-09T00:00:00.000Z",
                  "answerer_name": "durabldsdfsd",
                  "helpfulness": 2,
                  "photos": []
              },
              "5990618": {
                  "id": 5990618,
                  "body": "I want to see more pictures of products",
                  "date": "2023-02-09T00:00:00.000Z",
                  "answerer_name": "interested customer",
                  "helpfulness": 6,
                  "photos": [
                      "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png",
                      "https://i.pinimg.com/originals/16/6a/fa/166afa3d37dbbbeb179b5a3a3d658e10.png"
                  ]
              },
              "5990800": {
                  "id": 5990800,
                  "body": "Yay! you can count",
                  "date": "2023-02-11T00:00:00.000Z",
                  "answerer_name": "counter",
                  "helpfulness": 0,
                  "photos": [
                      "https://www.shutterstock.com/shutterstock/photos/289992878/display_1500/stock-vector-cartoon-boy-counting-his-fingers-counting-fingers-289992878.jpg"
                  ]
              },
              "5990802": {
                  "id": 5990802,
                  "body": "I think every question should have at least four answers",
                  "date": "2023-02-11T00:00:00.000Z",
                  "answerer_name": "the wonderer",
                  "helpfulness": 0,
                  "photos": []
              }
          }
      }
  ]
}

//need to know the current product displayed to know which questions to display

const QuestionsAndAnswers = () => {


  const [addQuestionModalShow, setAddQuestionModalShow] = useState(false);

  //sets default number of questions to display at 2
  const [numOfQuestions, setNumOfQuestions] = useState(2);



  var questions = apiQuestData.results;



  //sorts the array of question objects in order of helpfulness from high to low
  questions = questions.sort((a,b) => (b.question_helpfulness - a.question_helpfulness ));

  //toggle for testing purposes when array of questions is empty
  //questions = [];
  const [questionRenderMax, setQuestionRenderMax] = useState(false);

  var maxNumOfQuestions = questions.length;


  const moreAnsweredQuestionClick = () => {
    if (numOfQuestions < maxNumOfQuestions) {
      setNumOfQuestions(numOfQuestions + 2)
    } else {
      setQuestionRenderMax(true);
    }
    console.log('numOfQuestions', numOfQuestions)

  };

  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div style={{ borderStyle: 'solid', borderColor: 'grey' }}>
      <p>Questions and Answers</p>
      {questions.length ? (
        <>
          <Searchbar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
          <QuestionList questions={questions} numOfQuestions={numOfQuestions} searchQuery={searchQuery} />
          <button onClick={moreAnsweredQuestionClick}>More Answered Questions</button>
        </>
      ) : (<></>) }
      <button>Add a question</button>
    </div>
    )

}


export default QuestionsAndAnswers