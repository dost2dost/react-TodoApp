import React from 'react'

export default function Todd({todo,toggleTodos}) {
    function handleTodoClick() {
        toggleTodos(todo.id)
    }
    
    return (
        <div>
            <label>
                <input type="checkbox"  checked={todo.complete} onChange={handleTodoClick}/>
            {todo.name}
            </label>
        </div>
    )
}
