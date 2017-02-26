
import React, { Component, PropTypes } from 'react'
import classes from './Counter1.scss'

class Counter1 extends Component {

	render() {
		const { value, increment, decrement } = this.props

		return(
			<div className="counter1">
				<h4>Component1</h4>
				<h5>Value is {value}</h5>
				<button className="btn btn-default" onClick={increment}>+</button>
				{' '}
				<button className="btn btn-default" onClick={decrement}>-</button>
			</div>
		)
	}
}

Counter1.propTypes = {
	value: PropTypes.number.isRequired,
	increment: PropTypes.func.isRequired,
	decrement: PropTypes.func.isRequired,
}

export default Counter1

