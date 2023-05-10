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


const AddQuestionModal = ({open, onClose}) => {

  if (!open) {
    return (null);
  }

  const [userQuestion, setUserQuestion] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');


  const questionChange = (e) => {
    setUserQuestion(e.target.value);
  };

  const nicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const emailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    console.log(userQuestion, nickname, email);
    console.log(userQuestion.length)
    if (userQuestion === '') {
      alert('You must enter the following: question');
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
        <h2 style = {{color: "black"}}>Ask Your Question</h2>
        <h3 style = {{color: "black"}}>About the **product name**</h3>
        <br></br>
        <label>Your Question*</label>
        <input style={{height: "200px", width: "400px"}} type="text" id="question" maxLength="1000" onChange={questionChange}/><br></br>
        <label>Nickname*</label>
        <input type="text" id="nickname" placeholder='Example: jackson11!' maxLength="60" onChange={nicknameChange}/><br></br>
        <label>Email*</label>
        <input type="email" id="email" maxLength="60" onChange={emailChange}/>
        <p>For authentication reasons, you will not be emailed</p>
        <br></br>

      </form>
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={onClose}>Exit</button>

    </div>
    </div>
  )
}

export default AddQuestionModal

//<button onClick={onClose}>Submit</button>
//