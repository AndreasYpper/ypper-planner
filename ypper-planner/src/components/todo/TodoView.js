import React, { useState } from "react";
import Todo from "./Todo";
import CreateTodoForm from "./CreateTodoForm";
import { Typography } from "@mui/material";
import { Grid } from "@mui/material";

function TodoView() {
  const [todos, setTodos] = useState([
    { message: "Learn React!", active: true },
  ]);

  const addTodo = (newTodo) => {
    setTodos((prevState) => [...prevState, newTodo]);
  };

  const removeTodo = (todo) => {
    setTodos(todos.filter((t) => t.message !== todo));
  };

  const toggleTaskCompleted = (todo) => {
    const updatedTodos = todos.map((t) => {
      if (t.message === todo) {
        return { ...t, active: !t.active };
      }
      return t;
    });
    setTodos(updatedTodos);
  };
  const todosList = todos.map((todo) => (
    <Todo
      key={todo.message}
      message={todo.message}
      active={todo.active}
      removeTodo={removeTodo}
      toggleTaskCompleted={toggleTaskCompleted}
    />
  ));

  return (
    <div>
      <Grid
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <Grid item xs={12}>
          <Typography variant="h3">Todo's</Typography>
        </Grid>
        <Grid item md={7} sm={6} xs={12}>
          <Typography variant="h4">Active todos</Typography>
          {todosList}
        </Grid>
        <Grid item md={7} xs={12}>
          <CreateTodoForm addTodo={addTodo} />
        </Grid>
      </Grid>
    </div>
  );
}

export default TodoView;
