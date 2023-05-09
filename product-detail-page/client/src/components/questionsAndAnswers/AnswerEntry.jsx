import React, { useState } from 'react'
import { format } from 'date-fns';

const AnswerEntry = ({answer}) => {

  //console.log(answer);

  //initialized answer helpfulness to value from data
  const [answerHelpfulness, setAnswerHelpfulness] = useState(answer.helpfulness);
  const [helpfulAnswerClicked, setHelpfulAnswerClicked] = useState(false);

  //increments answer helpfulness only once on user click
  const handleHelpfulAnswerClick = () => {
    if (!helpfulAnswerClicked) {
      setAnswerHelpfulness(answerHelpfulness + 1);
      setHelpfulAnswerClicked(true);
    }
  };

  const [reported, setReported] = useState(false);

  const handleReportClick = () => {
    setReported(true);

  };

  return (
    <div>
      <p style={{ fontSize: 'large' }}>{answer.body}</p>
      <p>
        {'by '}
        {answer.answerer_name}
        {', '}
        {format(new Date(answer.date), 'MMMM d, y')}
        {' | Helpful? '}
        <a onClick={handleHelpfulAnswerClick}>Yes ({answerHelpfulness})</a>
        {' | '}
        {reported ? (<>Reported</>) : (<a onClick={handleReportClick}>Report</a>) }
        </p>
    </div>
  )
}


export default AnswerEntry

