import React from 'react'
import Todo from './Todo'
export default function ToDoList( {todos , toggleTodo}) {
  return (
    // Loop through todo and return todo
    todos.map(todo =>{
      return <Todo key={todo.id} toggleTodo={toggleTodo} todo ={todo} />
    })
  )
}
