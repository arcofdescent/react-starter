
import React, { Component, PropTypes } from 'react'
import classes from './Counter2.scss'

class Counter2 extends Component {

	render() {
		const { val, increment, decrement } = this.props

		return(
			<div className="counter1">
				<h4>Component2 (not aware of redux)</h4>
				<h5>Value is {val}</h5>
				<button className="btn btn-default" onClick={increment}>+</button>
				{' '}
				<button className="btn btn-default" onClick={decrement}>-</button>
			</div>
		)
	}
}

Counter2.propTypes = {
	val: PropTypes.number.isRequired,
	increment: PropTypes.func.isRequired,
	decrement: PropTypes.func.isRequired,
}

export default Counter2

