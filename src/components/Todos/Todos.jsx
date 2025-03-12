import React from "react";
import  TodoItem from "./TodoItem.jsx";
import "./Todos.css";
import Card from "../ui/Card.jsx";

const Expenses = ({ expenses, addExpenses }) => {
  const [currentYear, setCurrentYear] = React.useState("2025");

  let filteredExpenses = expenses.filter(
    (expense) =>
      currentYear === "all" ||
      expense.date.getFullYear().toString() === currentYear
  );
  return (
    <>
      <NewExpenses addExpenses={addExpenses} />
      <Card className="expenses">
        {filteredExpenses.length > 0 ? (
          filteredExpenses.map((expense) => (
            <ExpenseItem key={expense.id} {...expense} />
          ))
        ) : (
          <p className="not-found">Not found expenses</p>
        )}
      </Card>
    </>
  );
};

export default Expenses;
