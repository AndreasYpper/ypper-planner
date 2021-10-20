import React, { useState } from "react";
import { Box } from "@mui/system";
import { Grid, TextField, FormLabel, Button, Typography } from "@mui/material";

function CreateTodoForm(props) {
  const [todo, setTodo] = useState("");
  const [error, setError] = useState(null);

  const handleInput = (event) => {
    setTodo(event.target.value);
    setError(null);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      setError("This field can't be empty.");
    } else {
      setError(null);
      const newTodo = { message: todo, active: true };
      props.addTodo(newTodo);
      setTodo("");
    }
  };
  return (
    <Box sx={{ flexGrow: 1, border: '1px solid #E5E8EC', borderRadius: '10px', padding: '10px', margin: '10px' }}>
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
          <Typography align="center" variant="h4">
            Add new Todo
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <FormLabel htmlFor="todoInput">What needs to be done?</FormLabel>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="todoInput"
            variant="outlined"
            value={todo}
            onChange={handleInput}
            label="Add todo here"
            size="large"
          />
        </Grid>
        <Grid item xs={12}>
          <div style={{ color: "red" }}>{error}</div>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            size="medium"
            color="success"
            type="submit"
            onClick={handleSubmit}
            style={{width: '15em'}}
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CreateTodoForm;
