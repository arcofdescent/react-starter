

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

