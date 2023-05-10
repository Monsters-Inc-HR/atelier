import React from 'react';
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
  return (
    <div style={OVERLAY_STYLES}>
    <div style={MODAL_STYLES}>
      <form>
        <h2 style = {{color: "black"}}>Ask Your Question</h2>
        <h3 style = {{color: "black"}}>About the **product name**</h3>
        <br></br>
        <label>Your Question</label>
        <input type="text" id="question"/><br></br>
        <label>Nickname</label>
        <input type="text" id="nickname"/><br></br>
        <label>Email</label>
        <input type="text" id="email"/><br></br>
        <input type="button" value="Submit" onClick={onClose}/>
      </form>

    </div>
    </div>
  )
}

export default AddQuestionModal

//<button onClick={onClose}>Submit</button>