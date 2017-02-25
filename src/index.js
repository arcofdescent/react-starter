
import React from 'react'
import ReactDOM from 'react-dom'
import classes from './styles/app.scss'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import World from './components/World/World'
import reducers from './reducers'

const store = createStore(reducers)

const render = () => ReactDOM.render(
	<World 
		value={store.getState().val}
		onButtonClick={() => store.dispatch({type: 'INC_COUNTER'})}
	/>,
	document.getElementById('root')
)

render()
store.subscribe(render)

