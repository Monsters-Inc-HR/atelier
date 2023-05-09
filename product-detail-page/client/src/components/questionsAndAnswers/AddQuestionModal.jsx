import React from 'react';


const AddQuestionModal = ({open, children, onClose}) => {

  if (!open) {
    return (null);
  }
  return (
    <div>
      <button onClick={onClose}>Close AQModal</button>
      {children}
      <input></input>

    </div>
  )
}

export default AddQuestionModal

