import * as React from 'react';
function TodoList({todos,setTodos}) {
  function markAsDone(index) {
    console.log('ppp',index)
    const updatedTodos = todos.map((t) =>
      t.id === index
        ? {
            ...t,
            done: !t.done
          }
        : t
    );
    setTodos(updatedTodos);
  }
  return (
    <ul>
      {todos.map((todo,index) => {
        return (<li key={todo.id} style={{
          textDecoration: todo.done ? "line-through" : ""
        }}>{todo.text} 
        <button 
        style={{
          backgroundColor: todo.done ? "green" : "red",
          cursor: todo.done ? "not-allowed" : "pointer",
        }}
        onClick={()=>markAsDone(index+1)} disabled={todo.done}>done</button></li>);
      })}
    </ul>
  );
}
export default TodoList;
