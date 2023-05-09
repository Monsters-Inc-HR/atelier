import React from 'react'
import { format } from 'date-fns';

const AnswerEntry = ({answer}) => {

  //console.log(answer);

  return (
    <div>
      <p>{answer.body}</p>
      <p>
        {'by '}
        {answer.answerer_name}
        {', '}
        {format(new Date(answer.date), 'MMMM d, y')}
        {' | Helpful? '}
        <a>Yes ({answer.helpfulness})</a>
        {' | '}
        <a>Report</a>
        </p>
    </div>
  )
}


export default AnswerEntry