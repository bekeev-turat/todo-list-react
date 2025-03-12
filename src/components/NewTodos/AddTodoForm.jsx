import React, { useReducer, useContext } from 'react'
import './AddTodoForm.css'
import Card from '../ui/Card'
import { InputInfoReducer } from '../../store/fromReducer'
import todoData from '../../store/todoData'

const AddTodoForm = () => {
	const { createNewTodo } = useContext(todoData)

	const [inputInfoState, dispatchInputInfoState] = useReducer(
		InputInfoReducer,
		{
			title: '',
			date: '',
			id: null,
		},
	)

	const handleChangeDate = (event) => {
		dispatchInputInfoState({ type: 'DATE_CHANGE', value: event.target.value })
	}

	const handleChangeTitle = (event) => {
		dispatchInputInfoState({ type: 'TITLE_CHANGE', value: event.target.value })
	}

	const handleClickSubmit = (event) => {
		event.preventDefault()

		if (inputInfoState.title.trim().length === 0) {
			alert('Вы не заполнили title')
			return
		}
		if (inputInfoState.date.length === 0) {
			alert('Вы не заполнили date')
			return
		}
		const newId = crypto.randomUUID()

		createNewTodo(inputInfoState.title, inputInfoState.date, newId)

		dispatchInputInfoState({ type: 'RESET' })
	}

	return (
		<Card>
			<form onSubmit={handleClickSubmit}>
				<div className='new-todo__controls'>
					<div className='new-todo__control'>
						<label>Title</label>
						<input
							value={inputInfoState.title}
							onChange={handleChangeTitle}
							type='text'
							name='title'
							required
						/>
					</div>
					<div className='new-todo__control'>
						<label>Date</label>
						<input
							value={inputInfoState.date}
							min={'2021-01-19'}
							max={'2026-01-19'}
							onChange={handleChangeDate}
							type='date'
							name='date'
							required
						/>
					</div>
					<div className='new-todo__actions'>
						<button className='new-todo__todo__action' type='submit'>
							Add todo
						</button>
					</div>
				</div>
			</form>
		</Card>
	)
}

export default AddTodoForm
