
import { INC2, DEC2 } from '../actions/Types'

function counter2(state = 0, action) {
	switch (action.type) {
  case INC2:
    return state + 2
  case DEC2:
    return state - 2
  default:
    return state
	}
}

export default counter2

