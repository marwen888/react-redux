import React from 'react'
import {createStore} from "redux"
import reducer from './reducer/reducer.jsx'
 export const store = createStore (reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
