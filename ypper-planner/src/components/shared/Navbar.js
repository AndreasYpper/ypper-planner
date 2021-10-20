import React from "react";
import { AppBar, Toolbar, Typography, Grid } from "@mui/material";

function Navbar(props) {
    
  return (
    <AppBar>
      <Toolbar>
        <Grid
          container
          spacing={5}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <Typography variant="inherit" style={{ cursor: "pointer" }} onClick={() => props.onClickHandler('todo')}>
              Todo's
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="inherit" style={{ cursor: "pointer" }} onClick={() => props.onClickHandler('menu')}>
              Menu planner
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="inherit" style={{ cursor: "pointer" }} onClick={() => props.onClickHandler('training')}>
              Training diary
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
