import React from 'react';
import QuestionEntry from './QuestionEntry.jsx';




const QuestionList = ({questions}) => {



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