import React, { useState } from 'react';
import ToDoList from "./ToDoList";
function App() {
  const [todo, setTodos] = useState(['Todo 1','Todo 2'])
  return (
    <>
      <ToDoList todoList={todos}></ToDoList>
      <input type="text" />
      <button>Add Todo</button>
      <button>Clear Completed Todos</button>
      <div>0 left to do</div>
    </>
  );
}

export default App;
