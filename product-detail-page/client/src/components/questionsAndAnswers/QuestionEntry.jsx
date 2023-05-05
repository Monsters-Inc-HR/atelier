import React from 'react';
import AnswerEntry from './AnswerEntry.jsx';


const QuestionEntry = ({question}) => {




  return (
    <div>
      <span>
        Q:{question.question_body}
        Helpful?{question.question_helpfulness}
        <a href='empty link'>Add Answer</a>
        <AnswerEntry answer={question.answers} />
      </span>

    </div>
  )
}

export default QuestionEntry