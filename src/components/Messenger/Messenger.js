
import React, { Component, PropTypes } from 'react'
import classes from './Messenger.scss'

class Messenger extends Component {

	render() {
		const { increment } = this.props

		return(
			<div className="messager">
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

Messenger.propTypes = {
	increment: PropTypes.func.isRequired,
}

export default Messenger

