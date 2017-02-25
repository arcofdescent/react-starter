
import { UPDATE_PERSON } from './actionTypes'

export function updatePerson(name) {
	return {
		type: UPDATE_PERSON,
		name
	}
}
