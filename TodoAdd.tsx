import * as React from 'react';
function TodoAdd({setTodos}) {
  const inputRef = React.useRef();
  function addTodo() {
    const newTodo = inputRef.current.value;
    setTodos((prevTodos) => {
      return [...prevTodos,{
        id: prevTodos.length+1, text: newTodo, done: false
      }];
    });
    inputRef.current.value = ""
  }
  return(
    <div>
      <input type="text" placeholder="Add Item" aria-label="Add Item here" ref={inputRef}/> 
      <button onClick={()=> addTodo()}>+</button>
    </div>
  )
};
export default TodoAdd;