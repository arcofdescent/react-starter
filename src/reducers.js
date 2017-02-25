
import { combineReducers } from 'redux'

const initialState = {
	val: 0,
}

function reducer1(state = initialState, action) {
	switch (action.type) {
		case 'INC_COUNTER':
			return {
				...state,
				val: state.val + 1
			}
		default:
			return state
	}
}

/*
function reducer2(state = initialState, action) {
	switch (action.type) {
		case 'DEC_COUNTER':
			return {
				...state,
				val: state.val - 1
			}
		default:
			return state
	}
}
*/

/*
export reducers = combineReducers({
	1: reducer1, //reducer2
})

export default reducers
*/

export default reducer1

/*
const reApp = combineReducers({
	myApp,
})

export default reApp
*/


