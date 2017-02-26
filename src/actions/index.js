
import { INC, DEC, INC2, DEC2 } from './Types'

export function increment() {
	return {
		type: INC
	}
}

export function decrement() {
	return {
		type: DEC
	}
}

export function increment2() {
	return {
		type: INC2
	}
}

export function decrement2() {
	return {
		type: DEC2
	}
}

