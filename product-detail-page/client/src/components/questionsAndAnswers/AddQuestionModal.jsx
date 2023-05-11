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

  const [aqQuestion, setAqQuestion] = useState('');
  const [aqNickname, setAqNickname] = useState('');
  const [aqEmail, setAqEmail] = useState('');


  const aqQuestionChange = (e) => {
    setAqQuestion(e.target.value);
  };

  const aqNicknameChange = (e) => {
    setAqNickname(e.target.value);
  };

  const aqEmailChange = (e) => {
    setAqEmail(e.target.value);
  };

  const handleSubmit = () => {
    console.log(aqQuestion, aqNickname, aqEmail);

    if (aqQuestion === '') {
      alert('You must enter the following: question');
    } else if (aqNickname === '') {
      alert('You must enter the following: nickname');
    } else if (aqEmail === '' || aqEmail.indexOf('@') === -1) {
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
        <textarea type="text" id="aqQuestion" maxLength="1000" onChange={aqQuestionChange}></textarea><br></br>
        <label>Nickname*</label>
        <input type="text" id="aqNickname" placeholder='Example: jackson11!' maxLength="60" onChange={aqNicknameChange}/>
        <p>For privacy reasons, do not use your full name or email address</p>
        <br></br>
        <label>Email*</label>
        <input type="email" id="aqEmail" maxLength="60" placeholder="Example: jack@email.com" onChange={aqEmailChange}/>
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