
import React, { Component } from 'react'
import Counter1 from '../components/Counter1/Counter1'
import classes from '../styles/app.scss'

class App extends Component {

	render() {
		return(
			<Counter1 
				value={0}
				increment={() => console.log('increment clicked')}
				decrement={() => console.log('decrement clicked')}
			/>
		)
	}
}

export default App

