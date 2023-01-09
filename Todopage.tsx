import * as React from 'react';
import TodoList from './TodoList';
// import TodoSearch from './TodoSearch';
import TodoAdd from './TodoAdd';
function Todopage() {
  const initialTodos = [
    { id: 1, text: 'Wash dishes', done: false },
    { id: 2, text: 'Do laundry', done: false },
    { id: 3, text: 'Take shower', done: false },
  ];
  const [todos, setTodos] = React.useState(initialTodos);
  console.log(todos);
  return (
    <>
      <h2>Todo Planner</h2>
      <TodoAdd setTodos={setTodos}></TodoAdd>
      <TodoList todos={todos} setTodos={setTodos}></TodoList>
    </>
  );
}
export default Todopage;
