
function counter(state = 0, action) {
	switch (action.type) {
		case 'INC_COUNTER':
			//return Object.assign({}, state, { value: action.name })
			return state + 1
		default:
			return state
	}
}

export default counter

/*
const reApp = combineReducers({
	myApp,
})

export default reApp
*/


