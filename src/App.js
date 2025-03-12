import React, { useContext } from 'react'
import Card from './components/ui/Card.jsx'
import TodoItem from './components/Todos/TodoItem.jsx'
import AddTodoForm from './components/NewTodos/AddTodoForm.jsx'
import todoData from './store/todoData.js' 

function App() {
	const { todoList } = useContext(todoData) 

	return (
		<>
			<AddTodoForm />
			<Card>
				{todoList.length > 0 ? (
					todoList.map((todo) => <TodoItem key={todo.id} {...todo} />)
				) : (
					<p>Список задач пуст</p>
				)}
			</Card>
		</>
	)
}

export default App
