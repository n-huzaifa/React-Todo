import React from 'react'

function Todo({ todo, toggleComplete, removeTodo }) {

    function handleRemoveClick() {
        removeTodo(todo.id)
    }

    function handleCheckboxClick() {
        toggleComplete(todo.id)
    }

    return (
        <div className='flex items-center space-x-3 pl-5'>
            <input type="checkbox" onClick={handleCheckboxClick} />
            <li
                style={{
                    textDecoration: todo.completed ? "line-through" : null
                }}>
                {todo.task}
            </li>
            <button onClick={handleRemoveClick}>❌ </button>
        </div>
    )
}

export default Todo