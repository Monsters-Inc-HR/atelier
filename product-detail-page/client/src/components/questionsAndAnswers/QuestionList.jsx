import React from 'react';
import QuestionEntry from './QuestionEntry.jsx';


//const questions = ['a', 'b', 'c', 'd', 'e'];

const QuestionList = ({questions}) => {


 //console.log(questions);
  return (
    <div style={{ borderStyle: 'solid', borderColor: 'blue' }}>
      {questions.map((question, index) => (
      <QuestionEntry
        question={question}
        key={index}


      />
        ))}

    </div>
  )
}

export default QuestionList