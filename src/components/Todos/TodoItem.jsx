import React, { useContext } from "react";
import "./TodoItem.css";
import TodoDate from "./TodoDate";
import todoData from "../../store/todoData";

const TodoItem = ({ title, date, id}) => {
  console.log(id);
  
  const { deleteTodo } = useContext(todoData)
  return (
    <div className="todo-item">
      <TodoDate date={date} />
      <h2>{title}</h2>
      <button onClick={() => deleteTodo(id)}>Delete</button>
    </div>
  );
};  

export default TodoItem;
