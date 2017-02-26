
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import reducers from './reducers/Counter'

let store = createStore(reducers)

ReactDOM.render(
	<Provider store={store}>
		<div className="app">
			<h3>Container App (contains redux logic)</h3>
			<App />
		</div>
	</Provider>,
	document.getElementById('root')
)

