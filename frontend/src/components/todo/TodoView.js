import React from "react";
import TodoForm from './TodoForm'
import Todo from "./Todo";

function TodoView () {
    const [todos, setTodos] = React.useState([{name: '', complete: false}])

    const addTodo = (todo) => {
        setTodos([...todos, todo])
    }

    const todosList = todos.map((todo) => {
        if(todo.name === '') {
            return
        }
        return <Todo name={todo.name} complete={todo.complete} key={todo.name} />
    })
    return (
        <div>
            <TodoForm addTodo={addTodo} />
            <h1>Todos</h1>
            {todosList}
        </div>
    )
}

export default TodoView