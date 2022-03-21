import React, { useState, useRef , useEffect} from "react";
import ToDoList from "./ToDoList";
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  // By default there is nothing in useState so that we can pass value to the input box
  const [todos, setTodos] = useState([])
  // initialise to use object from useRef
  const todoNameRef = useRef()

  // this to help store info to local
  //Store
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  } ,[])
  //Set
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  },[todos])
  // Toggle todo incomplete/complete
  function toggleTodo(id){
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleAddToDo(e) {
    const name = todoNameRef.current.value;
    if (name === "") return;
    // Give previous todo
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }];
    });
    todoNameRef.current.value = null;
  }
  function handleClearToDos(){
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }
  return (
    <>
      <ToDoList todos={todos} toggleTodo={toggleTodo} />
      {/* We can access to todo input box value */}
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddToDo}>Add Todo</button>
      <button onClick={handleClearToDos}>Clear Completed Todos</button>
      <div>{todos.filter(todo => !todo.complete).length} left to do</div>
    </>
  );
}

export default App;
