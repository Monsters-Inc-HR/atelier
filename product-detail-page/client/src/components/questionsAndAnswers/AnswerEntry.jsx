import React from 'react'


const AnswerEntry = ({answer}) => {

  console.log(answer);

  return (
    <div>
      <p>{answer.body}</p>
      <p>
        {answer.answerer_name}
        {' '}
        {answer.date}
        {' Helpful? '}
        <a href='empty'>Yes {answer.helpfulness}</a>
        {' '}
        <a href='empty'>Report</a>
        </p>
    </div>
  )
}


export default AnswerEntry