import React from "react";
import "./TodoDate.css";

const TodoDate = ({ date }) => {
  const parsedDate = date ? new Date(date) : null;

  if (!parsedDate || isNaN(parsedDate)) {
    return <p className="todo-date">Invalid date</p>;
  }

  const year = parsedDate.getFullYear();
  const month = parsedDate.toLocaleString("en-EN", { month: "long" });
  const day = parsedDate.toLocaleString("en-EN", { day: "numeric" });

  return (
    <div className="todo-date">
      <p className="todo-date__day">{day}</p>
      <p className="todo-date__month">{month}</p>
      <p className="todo-date__year">{year}</p>
    </div>
  );
};

export default TodoDate;
