
import { combineReducers } from 'redux'
import reducer1 from './counter'

const myApp = combineReducers({
  reducer1,
})

export default myApp

