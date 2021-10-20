import React from 'react'
import { useSelector } from 'react-redux'
import Todocard from './Todocard'

const Todolist = () => {
    const todo = useSelector(state=>state.todo)
    return (
        <div>
            {todo.map(el=><Todocard todo={el}/>)}
            
        
        </div>
    )
}

export default Todolist
