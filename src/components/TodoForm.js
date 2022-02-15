import React, { useState } from 'react'
import { v4 } from 'uuid';

function TodoForm({ addTodo }) {

    const [todo, setTodo] = useState({
        id: "",
        task: "",
        complete: false,
    })

    function handleTaskChange(e) {
        setTodo({ ...todo, task: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (todo.task.trim()) {
            addTodo({ ...todo, id: v4() })
            //reset Task input
            setTodo({ ...todo, task: "" })
        }
    }
    return (
        <form onSubmit={handleSubmit} >
            React Todo Test App
            <input
                className='border-2 border-black rounded-md'
                name="task"
                type="text"
                value={todo.task}
                onChange={handleTaskChange}
            />
            <button type="submit" >✅</button>
        </form>
    )
}

export default TodoForm
















    // const initialTodo = [
    //     {
    //         id: 1,
    //         name: "wash dishes",
    //         complete: true,
    //     },
    //     {
    //         id: 2,
    //         name: "Drink your coffee",
    //         complete: false,
    //     },
    //     {
    //         id: 3,
    //         name: "Film a video",
    //         complete: true,
    //     }
    // ]