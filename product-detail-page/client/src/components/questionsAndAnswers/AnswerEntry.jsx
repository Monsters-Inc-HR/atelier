import React, { useState } from 'react'
import { format } from 'date-fns';

const AnswerEntry = ({answer}) => {

  //console.log(answer);

  const [answerHelpfulness, setAnswerHelpfulness] = useState(answer.helpfulness);
  const [helpfulAnswerClicked, setHelpfulAnswerClicked] = useState(false);

  const handleHelpfulAnswerClick = () => {
    if (!helpfulAnswerClicked) {
      setAnswerHelpfulness(answerHelpfulness + 1);
      setHelpfulAnswerClicked(true);
    }

  };

  return (
    <div>
      <p>{answer.body}</p>
      <p>
        {'by '}
        {answer.answerer_name}
        {', '}
        {format(new Date(answer.date), 'MMMM d, y')}
        {' | Helpful? '}
        <a onClick={handleHelpfulAnswerClick}>Yes ({answerHelpfulness})</a>
        {' | '}
        <a>Report</a>
        </p>
    </div>
  )
}


export default AnswerEntry