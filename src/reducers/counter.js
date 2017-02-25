

const initialState = {
	val: 0,
}

function reducers(state = initialState, action) {
	switch (action.type) {
  case 'INC':
    return {
      ...state,
      val: state.val + 1,
    }
  case 'DEC':
    return {
      ...state,
      val: state.val - 1,
    }
  default:
    return state
	}
}

export default reducers

/*
export function reducer2(state = {}, action) {
	switch (action.type) {
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


/*
const reApp = combineReducers({
	myApp,
})

export default reApp
*/


