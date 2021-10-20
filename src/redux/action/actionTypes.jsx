import {ADDTODO,DELETETODO,EDITTODO,TOGGLECOMPLETE} from './action.jsx'
export const addtodo=(newtodo)=>{
return {
type:ADDTODO,
payload:newtodo
}
}
export const deletetodo=(id)=>{
return {
type:DELETETODO,
payload:id
}
}
export const edittodo=(editetodo)=>{
return {
type:EDITTODO,
payload:editetodo
}
}
export const togglecomplete=(id)=>{
return {
type:TOGGLECOMPLETE,
payload:id
}
}