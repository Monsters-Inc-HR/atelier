import React, { useState } from 'react';

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


const AddQuestionModal = ({open, onClose, questions}) => {

  //console.log(questions);
//   questions.push({
//     "question_id": 644364,
//     "question_body": "what does cozy mean",
//     "question_date": "2022-12-08T00:00:00.000Z",
//     "asker_name": "pixter",
//     "question_helpfulness": 6,
//     "reported": false,
//     "answers": {
//         "5989885": {
//             "id": 5989885,
//             "body": "why so serious?",
//             "date": "2022-12-16T00:00:00.000Z",
//             "answerer_name": "joker",
//             "helpfulness": 5,
//             "photos": []
//         },
//         "5989953": {
//             "id": 5989953,
//             "body": "ANswer",
//             "date": "2022-12-17T00:00:00.000Z",
//             "answerer_name": "test ",
//             "helpfulness": 2,
//             "photos": [
//                 "http://res.cloudinary.com/dq6rqplja/image/upload/v1671286790/ly9dfe12mty8fpq6mlr0.png"
//             ]
//         },
//         "5990613": {
//             "id": 5990613,
//             "body": "I don't like the other answers here so I'm going to report them",
//             "date": "2023-02-09T00:00:00.000Z",
//             "answerer_name": "abouttoblock",
//             "helpfulness": 0,
//             "photos": []
//         },
//         "5990669": {
//             "id": 5990669,
//             "body": "This is an answer from me",
//             "date": "2023-02-09T00:00:00.000Z",
//             "answerer_name": "miggy",
//             "helpfulness": 0,
//             "photos": [
//                 "https://media.istockphoto.com/id/1277773173/vector/texas-states-of-usa-outline-map-vector-template-illustration-design-editable-stroke.jpg?s=612x612&w=0&k=20&c=m2l4vnT6hSglIMEQmlYoKV1ego2bhFFp3NuFLRvxF3I="
//             ]
//         },
//         "5991453": {
//             "id": 5991453,
//             "body": "dsfdsf",
//             "date": "2023-03-31T00:00:00.000Z",
//             "answerer_name": "asdfadsf",
//             "helpfulness": 0,
//             "photos": [
//                 "blob:http://localhost:3000/abf5f808-f4fc-45b6-b941-c369ffb1ca6e"
//             ]
//         },
//         "5991455": {
//             "id": 5991455,
//             "body": "test",
//             "date": "2023-03-31T00:00:00.000Z",
//             "answerer_name": "test",
//             "helpfulness": 0,
//             "photos": [
//                 "blob:http://localhost:3000/fd6ab951-7c50-4f84-8036-1884a39696c1"
//             ]
//         }
//     }
// });

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
    if (aqQuestion === '') {
      alert('You must enter the following: question');
    } else if (aqNickname === '') {
      alert('You must enter the following: nickname');
    } else if (aqEmail === '' || aqEmail.indexOf('@') === -1) {
      alert('You must enter the following: email')
    } else {
      //TODO handle data submission
      //currently makes a basic question object and renders it
      var userQuestion = {
        "question_body": aqQuestion,
        "question_helpfulness": 0,
        "reported": false,
        "answers": {}
      };
      questions.push(userQuestion);
      //console.log('userQuestion', userQuestion)
      //console.log('questions in handleSubmit', questions)
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
