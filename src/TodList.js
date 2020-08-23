import React from 'react'
import Todo from './Todd'


export default function TodList({todos,toggleTodos}) {
   return (
       todos.map(todo => {
           return <Todo key={todo.id} todo={todo} toggleTodos={toggleTodos} />
       })
   )
}
