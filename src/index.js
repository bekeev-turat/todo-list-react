import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { TodoDataProviderComponent } from './store/todoData'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<TodoDataProviderComponent>
		<App />
	</TodoDataProviderComponent>,
)
