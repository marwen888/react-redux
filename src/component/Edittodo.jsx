import React,{useState} from 'react'
import {connect} from 'react-redux'
import {edittodo} from "../redux/action/actionTypes"
import {Button,Modal,InputGroup,FormControl} from "react-bootstrap"
import {GrEdit} from "react-icons/gr";
import 'bootstrap/dist/css/bootstrap.min.css';


const Edittodo = ({todo, edittodo}) => {
     const [show, setShow] = useState(false);
     const [text, setText] = useState(todo.text);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSave =()=>{
  const editetodo={
      ...todo , text:text
  }
   edittodo (editetodo)
   setShow (false)
}
    return (
        <div>
            <button variant="primary" onClick={handleShow}>
        <GrEdit/>
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>ADD NEW TASK</Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <InputGroup className="mb-3">

    <FormControl
      aria-label="Default"
      aria-describedby="inputGroup-sizing-default"
      value={text}
      onChange={(e)=>setText(e.target.value)}
    />
  </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>SAVE</Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default connect (null,{edittodo}) (Edittodo)
