import React, { useEffect, useState } from 'react'
import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'

const LOCAL_STR_KEY = "todos"

function Main() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STR_KEY))
        if (storageTodos) {
            setTodos(storageTodos)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STR_KEY, JSON.stringify(todos))
    }, [todos])

    function addTodo(todo) {
        setTodos([todo, ...todos])
    }

    function toggleComplete(id) {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo
            })
        )
    }

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    return (
        <div className='font-bold text-2xl'>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo} />
        </div>
    )
}

export default Main