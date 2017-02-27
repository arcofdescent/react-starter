
// Our main container App

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment, decrement, increment2, decrement2 } from '../actions'
import Counter1 from '../components/Counter1/Counter1'
import Counter2 from '../components/Counter2/Counter2'
import Messenger from '../components/Messenger/Messenger'
import classes from '../styles/app.scss'

class App extends Component {

	render() {
		// we receive these from props
		// dispatch is received since we are connected to the store
		// counter1 and counter2 are received as specifed in the select function
		const { dispatch, counter1, counter2 } = this.props

		return(
			<div>
				<div className="row">
					<div className="col-xs-6">
						<Counter1 
							val={counter1}
							increment={() => dispatch(increment())}
							decrement={() => dispatch(decrement())}
						/>
					</div>
					<div className="col-xs-6">
						<Counter2 
							val={counter2}
							increment={() => dispatch(increment2())}
							decrement={() => dispatch(decrement2())}
						/>
					</div>
				</div>
				<br/><br/>
				<div className="row">
					<div className="col-xs-6">
						<Messenger 
							increment={() => dispatch(increment())}
						/>
					</div>
				</div>
			</div>
		)
	}
}

// This tell use which state values should be sent to App
function select(state) {
	return {
		counter1: state.counter1,
		counter2: state.counter2,
	}
}

export default connect(select)(App)

