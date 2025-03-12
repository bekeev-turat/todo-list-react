import React, { createContext, useState, useEffect } from 'react'

const todoData = createContext({
  createNewTodo: () => {},
  deleteTodo: () => {}, 
  todoList: [],
})

export const TodoDataProviderComponent = ({ children }) => {
  const [todoList, setTodoList] = useState([])

  useEffect(() => {
    const storedTodos = localStorage.getItem('todo')
    if (storedTodos) {
      setTodoList(JSON.parse(storedTodos))
    }
  }, [])

  const createNewTodoHandler = (title, date, id) => {
    const updatedTodoList = [...todoList, { title, date, id }]
    setTodoList(updatedTodoList)
    localStorage.setItem('todo', JSON.stringify(updatedTodoList))
  }

  const deleteTodoHandler = (id) => {
    const updatedTodoList = todoList.filter(todo => todo.id !== id) 
    setTodoList(updatedTodoList)
    localStorage.setItem('todo', JSON.stringify(updatedTodoList)) 
  }

  return (
    <todoData.Provider
      value={{
        createNewTodo: createNewTodoHandler,
        deleteTodo: deleteTodoHandler, 
        todoList,
      }}
    >
      {children}
    </todoData.Provider>
  )
}

export default todoData
