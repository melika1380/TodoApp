import React from "react";
import AddTaskForm from "../AddTaskForm/AddTaskForm";
import TaskList from "../TaskList/TaskList";
import FilterFooter from "../FilterFooter/FilterFooter";
const TodoApp = () => (
  <header className="TodoApp">
      <AddTaskForm />
      <TaskList />
      <FilterFooter />
  </header>
);

export default TodoApp;
