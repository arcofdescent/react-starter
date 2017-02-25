
import { connect } from 'react-redux'
import { updatePerson } from '../actions'
import World from '../components/World/World'

const mapDispatchToProps = (dispatch) => {
	return {
		onButtonClick: (name) => dispatch(updatePerson(name))
	}
}

const App = connect(
	mapDispatchToProps,
)(World)

export default App


