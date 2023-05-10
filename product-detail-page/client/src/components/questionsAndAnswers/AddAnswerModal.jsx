import React, { useState } from 'react';
//import ReactDom from 'react-dom'

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#FFF',
  color: 'black',
  padding: '50px',
  zIndex: 1000
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
}


const AddAnswerModal = ({open, onClose}) => {

  if (!open) {
    return (null);
  }

  const [userAnswer, setUserAnswer] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');


  const AnswerChange = (e) => {
    setUserAnswer(e.target.value);
  };

  const nicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const emailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    console.log(userAnswer, nickname, email);

    if (userAnswer === '') {
      alert('You must enter the following: answer');
    } else if (nickname === '') {
      alert('You must enter the following: nickname');
    } else if (email === '' || email.indexOf('@') === -1) {
      alert('You must enter the following: email')
    } else {


      //TODO handle data submission

      onClose();
    }
  };


  return (
    <div style={OVERLAY_STYLES}>
    <div style={MODAL_STYLES}>
      <form>
        <h2 style = {{color: "black"}}>Submit your Answer</h2>
        <h3 style = {{color: "black"}}>**Product Name : Question Body**</h3>
        <br></br>
        <label>Your Answer*</label>
        <textarea type="text" id="userAnswer" maxLength="1000" onChange={AnswerChange}></textarea>
        <br></br>
        <label>Nickname*</label>
        <input type="text" id="nickname" placeholder='Example: jack543!' maxLength="60" onChange={nicknameChange}/>
        <p>For privacy reasons, do not use your full name or email address</p><br></br>
        <label>Email*</label>
        <input type="email" id="email" maxLength="60" placeholder="jack@email.com" onChange={emailChange}/>
        <p>For authentication reasons, you will not be emailed</p>
        <br></br>

      </form>
      <button>Upload Photos</button>
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={onClose}>Exit</button>

    </div>
    </div>
  )
}

export default AddAnswerModal

//<button onClick={onClose}>Submit</button>
//