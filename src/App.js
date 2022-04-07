import { Box, Grid} from "@mui/material";
import React from "react";
import { Body } from "./components/Body";
import { Navbar } from "./components/Navbar";
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';

function App() {
  return (
    <Box
      component=""
      sx={{
        width: "10vw",
        height: { xs: "auto", md: "100vh" },
        // border: "3px dashed red",
        m: 0,
        p: 0,
        boxSizing: "border-box",
        // border: "4px solid yellow"
        // bgcolor: "white",
      }}
    >
      <Grid container direction="row-reverse" justifyContent={"left"}>
        <Grid item>
          <Navbar />
        </Grid>
        <Grid item>
      <Body />
        </Grid>
      </Grid>

    </Box>
  );
}

export default App;
