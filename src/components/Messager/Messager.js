
import React, { Component, PropTypes } from 'react'
import classes from './Messager.scss'

class Messager extends Component {

	render() {
		const { increment } = this.props

		return(
			<div className="counter1">
				<div style={{borderBottom: '1px solid #aaa', paddingBottom: 5}}>
					<h4>Component3</h4>
					This a component which sends messages to Component1. It demonstrates 
          communication between siblings by updating state.
				</div>
        <div>
          <br/>
          <button className="btn btn-default" onClick={increment}>+ Component1</button>
        </div>
			</div>
		)
	}
}

Messager.propTypes = {
	increment: PropTypes.func.isRequired,
}

export default Messager

