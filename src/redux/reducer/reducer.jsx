import {ADDTODO,DELETETODO,EDITTODO,TOGGLECOMPLETE} from '../action/action.jsx'

const initialState ={
 todo :[
        {
            text: "learn react js",
            id:1,
            isComplete : false

        },
        {
            text: "learn node js",
            id:4,
            isComplete : false

        }
      ]

}


const reducer = (state=initialState, action) => {
    switch (action.type)
    {
           case ADDTODO:
           return ({
               ...state, todo :[...state.todo , action.payload]

           })
           case DELETETODO:
           return ({

            ...state, todo :state.todo.filter(el=>el.id!==action.payload)
           })
            case EDITTODO:
           return ({

                  ...state, todo :state.todo.map(el=>el.id===action.payload.id? action.payload :el)
            
           })
            case TOGGLECOMPLETE:
           return ({

            ...state, todo :state.todo.map(el=>el.id===action.payload ? {...el, isComplete: !el.isComplete} :el)
            
           })
     default :
    return state
    }
}
 

export default reducer
