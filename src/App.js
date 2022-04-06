import { Box, Grid, Button, Modal,Backdrop } from "@mui/material";
import React, { useState } from "react";
import SimpleBackdrop from "./components/Backdrop";
import { Navbar } from "./components/Navbar";
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';

function App() {
  

  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        // border: "3px dashed red",
        m: 0,
        p: 0,
        boxSizing: "border-box",bgcolor:"orangered"
      }}
    >
      <Grid container>
        <Navbar />
      </Grid>

      <br />
      <Box>
        {/* <SimpleBackdrop /> */}
      </Box>
    </Box>
  );
}

export default App;
