
import React, { Component, PropTypes } from 'react'
import classes from './World.scss'

class World extends Component {

	render() {
		const { value, onButtonClick } = this.props

		return(
			<div>
				<h3>Hello {value}, welcome to my world!</h3>
			{ /*<input type="text" placeholder="Enter your name" ref="input" />*/}
				<button onClick={onButtonClick}>Submit</button>
			</div>
		)
	}
}

World.propTypes = {
	value: PropTypes.number.isRequired,
	onButtonClick: PropTypes.func.isRequired,
}

export default World

