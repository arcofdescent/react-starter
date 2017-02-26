
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from '../actions'
import Counter1 from '../components/Counter1/Counter1'
import classes from '../styles/app.scss'

class App extends Component {

	render() {
		const { dispatch, val } = this.props

		return(
			<Counter1 
				val={val}
				increment={() => dispatch(increment())}
				decrement={() => dispatch(decrement())}
			/>
		)
	}
}

function select(state) {
	return {
		val: state.val,
	}
}

export default connect(select)(App)

