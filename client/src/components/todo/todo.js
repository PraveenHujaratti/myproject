import ListElements from "./listElement"
import { useState } from 'react'
import './todo.css'
function Todo(props) {

    const [todos, setTodos] = useState([])
    const [input, setInput] = useState('')

    const deleteTodo = (id) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id)
        setTodos(updatedTodos)
        console.log(updatedTodos)
    }

    const addTodo = () => {
        if (input.trim().length === 0) {
            return
        }
        setTodos((prev) => {
            return [...prev, { id: Date.now(), value: input, checked: false }]
        })
        setInput('')
    }
    const toggleChecked = (id) => {

        let updated = todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, checked: !todo.checked }
            }
            return todo
        })

        setTodos(updated)
    }
    return (
        <div className="main-container">
            <div className="todo-container">
                <h1 className="title">Todo App</h1>
                <div className="todo-input-wrap">
                    <input value={input} type="text" placeholder="Enter todo" onChange={(e) => setInput(e.target.value)} />
                    <button onClick={addTodo}>Add Todo</button>
                </div>

                {
                    todos.map((value) => {
                        return (
                            <ListElements key={value.id} todoValue={value} deleteTodo={deleteTodo} toggleChecked={toggleChecked} />
                        )
                    })
                }

            </div>
        </div>
    )
}
export default Todo