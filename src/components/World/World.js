
import React, { Component, PropTypes } from 'react'
import classes from './World.scss'

class World extends Component {

	render() {
		const { value, increment, decrement } = this.props

		return(
			<div>
				<h3>Hello {value}, welcome to my world!</h3>
				<button onClick={increment}>+</button>
				{' '}
				<button onClick={decrement}>-</button>
			</div>
		)
	}
}

World.propTypes = {
	value: PropTypes.number.isRequired,
	increment: PropTypes.func.isRequired,
	decrement: PropTypes.func.isRequired,
}

export default World

