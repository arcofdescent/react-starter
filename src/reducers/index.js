
import { combineReducers } from 'redux'
import counter1 from './Counter1'
import counter2 from './Counter2'

/* State tree
 initialState = {
 	counter1: 0,
	counter1: 0,
 }

 */
const reducers = combineReducers({
  counter1,
	counter2
})

export default reducers

