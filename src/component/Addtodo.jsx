import React,{useState} from 'react'
import { connect } from 'react-redux'
import {addtodo} from "../redux/action/actionTypes"
import {Form, Container,Button} from "react-bootstrap"

const Addtodo = ({addtodo}) => {
  const [text, setText]=useState ("")
  const handlesave=()=>{
   const newtodo={
     text:text,
     id:Math.random(),
     isComplete:false
   }
   
    addtodo(newtodo)
        setText("")
   
  }
    return (
    <div style={{backgroundColor :"#C37B89"}}>
          <Container style={{display:"flex", padding:"6% 11%"}}>
           <Form.Control type="text" placeholder="enter your new task"value={text} onChange={(e)=>setText(e.target.value)} />
          <Button style={{marginLeft:"15px"}} variant="outline-primary" onClick={handlesave}>ADD </Button>
          </Container>
        </div>
    )
}

export default connect (null,{addtodo}) (Addtodo)
