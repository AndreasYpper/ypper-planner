import { Box } from "@mui/system";
import {
  Checkbox,
  Grid,
  Typography,
  Button,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import React from "react";

function Todo(props) {
  return (
    <Box
      sx={{
        border: "1px solid #E5E8EC",
        borderRadius: "10px",
        padding: "10px",
        margin: "10px",
      }}
    >
      <Grid
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <Grid item>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  id={props.message}
                  type="checkbox"
                  defaultChecked={!props.active}
                  onChange={() => props.toggleTaskCompleted(props.message)}
                />
              }
              label={props.message}
            />
          </FormGroup>
          {/* <Checkbox
            id={props.message}
            type="checkbox"
            defaultChecked={!props.active}
            onChange={() => props.toggleTaskCompleted(props.message)}
          />
          <Typography variant="subtitle1">{props.message}</Typography> */}
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="outlined"
            size="medium"
            color="error"
            onClick={() => props.removeTodo(props.message)}
          >
            Remove
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Todo;
