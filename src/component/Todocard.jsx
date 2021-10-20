import React from 'react'
import {connect} from 'react-redux'
import {deletetodo,togglecomplete} from '../redux/action/actionTypes'
import Edittodo from './Edittodo'
import {GoTrashcan} from "react-icons/go";
import '../App.css';



const Todocard = ({todo,deletetodo,togglecomplete}) => {
    return (
        <div>
        <p className="d-flex justify-content-around"> 
        
        
        
        <span style={{width:"50%"}} >
        <h3 style={todo.isComplete ? { textDecoration :"line-through ",color : "lightgray"} :{color : "#17a2b8"}}>{todo.text}</h3>
        </span>
        
    
        <span style={{display:"flex"}}>
        <button onClick={()=>deletetodo(todo.id)} ><GoTrashcan/></button> 
        <Edittodo todo={todo}/> 
        <button onClick={()=>togglecomplete(todo.id)}>{todo.isComplete ? <span style={{color:"red"}}>🗹 </span>:<span style={{color:"green"}}>🗹 </span>}</button>
        </span>
        
        </p>
        </div>
    )
}

export default connect(null,{deletetodo,togglecomplete})  (Todocard)
