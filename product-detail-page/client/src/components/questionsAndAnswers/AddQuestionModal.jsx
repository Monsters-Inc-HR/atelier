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
    if (userQuestion === '') {
      alert('please enter a valid question');
    } else if (nickname === '') {
      alert('please enter a valid nickname');
    } else if (email === '' || email.indexOf('@') === -1) {
      alert('please enter a valid email')
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
        <label>Your Question</label>
        <input type="text" id="question" required onChange={questionChange}/><br></br>
        <label>Nickname</label>
        <input type="text" id="nickname" onChange={nicknameChange}/><br></br>
        <label>Email</label>
        <input type="email" id="email" onChange={emailChange}/><br></br>
        <input type="button" value="x" onClick={onClose}/>
      </form>
      <button onClick={handleSubmit}>Submit</button>

    </div>
    </div>
  )
}

export default AddQuestionModal

//<button onClick={onClose}>Submit</button>
//