
import React, { Component, PropTypes } from 'react'
import classes from './Counter1.scss'

class Counter1 extends Component {

	render() {
		const { val, increment, decrement } = this.props

		return(
			<div className="counter1">
				<div style={{borderBottom: '1px solid #aaa', paddingBottom: 5}}>
					<h4>Component1</h4>
					This a counter which increments/decrements the value by <b>1</b>. This is 
					a <i>dumb</i> child component. It does not contain any redux related logic.
				</div>
				<div style={{textAlign: 'center'}}>
					<h5>Value: {val}</h5>
					<button className="btn btn-default" onClick={increment}>+</button>
					{' '}
					<button className="btn btn-default" onClick={decrement}>-</button>
				</div>
			</div>
		)
	}
}

Counter1.propTypes = {
	val: PropTypes.number.isRequired,
	increment: PropTypes.func.isRequired,
	decrement: PropTypes.func.isRequired,
}

export default Counter1

