import {
  Divider,
  Grid,
  Stack,
  Box,
  Typography,
  Backdrop,
} from "@mui/material";
import { green } from "@mui/material/colors";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import { experimental_sx as sx } from "@mui/system";
import "../fonts/Oswald/Oswald-Regular.ttf";
import "./nav.css";
import { useState } from "react";
import { Breakpoints } from "./customBreakpoints";

export function Navbar() {
  //Controlling Backdrop display
  const [open, setOpen] = useState(false);
  const opener = () => setOpen(true); //activates Backdrop by setting open to true
  const closer = () => setOpen(false); //deactivates Backdrop by setting open to false

//using custom breakpoints
  const [matches,matches2,special] = Breakpoints()
  
  //Styling typography to use as Navbar item
  const NavBox = styled(Typography)(
    sx({
      //   border: "1px solid white",
      px: 0.8,
      height: 10,
      textTransform: "uppercase",
      fontFamily: "Oswald",
      letterSpacing: "-1px",
      fontsize: "10px",
      cursor: "pointer",
      "&:hover": { color: "orangered" },
      "&:active": { color: "orangered" },
      textAlign: "center",
    })
  );

  //if the breakpoints corresponding to 'matches' rednder
  return matches ? (
    //this component
    <Grid container p={0} component="nav" sx={{position:"relative",}}>
    {/* <Grid container p={2} bgcolor="yellow" component="nav" sx={{height:0}}> */}
      <Grid item container justifyContent="flex-end" pt={1.3} sx={{position:"absolute",top:"2.2vh",right:"4vw",zIndex:999}}>
        <MenuIcon
          sx={{
            border: "1px solid black",
            bgcolor: "white",
            px: 1.2,
            py: 0.6,
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={opener}
        />
        {/*Backdrop => light dark screnn
              styled its color and duration */}
        <Backdrop
          sx={{
            color: "#fff",
            zIndex: (theme) => theme.zIndex.drawer + 1,
            bgcolor: "rgba(0,0,0,0.92)",
          }}
          open={open}
          //   onClick={handleClose}
          transitionDuration={700}
        >
          {/* The display of this component is embedded in the backdrop*/}
          <Grid
            item
            container
            sx={{
              display: "block",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",

              // border: "2px solid red",
              bgcolor: "rgba(0, 0, 0, 0)",
            }}
            color="white"
          >
            <Grid
              item
              container
              p={2}
              bgcolor="rgba(0,0,0,0)"
              direction="column"
            >
              <Grid
                item
                container
                justifyContent="flex-end"
                spacing={3}
                pt={4.5}
              >
                <MenuIcon
                  sx={{
                    border: "1px solid black",
                    bgcolor: "white",
                    px: 1.2,
                    py: 0.5,
                    borderRadius: "5px",
                    cursor: "pointer",
                    color: "black",
                  }}
                  onClick={closer}
                />
              </Grid>
            </Grid>
            <Grid
              item
              mt={-7.2}
              ml={5}
              container
              sx={{
                border: "1px solid redl",
                width: "80%",
                height: "70%",
                opacity: "1",
                //   transition: "all 0.3s ease",
              }}
              justifyContent="center"
              alignItems="start"
            >
              <Stack spacing={5} direction="column">
                <NavBox variant="h5">full home page</NavBox>
                <NavBox variant="h5">top 100</NavBox>
                <NavBox variant="h5">trending</NavBox>
                <NavBox variant="h5">contact</NavBox>
                <NavBox variant="h5" pb={2.35}>
                  upload
                </NavBox>
                <Stack spacing={7.7} direction="row">
                  <NavBox
                    sx={{ fontFamily: "Oswald", textTransform: "capitalize" }}
                    variant="h6"
                  >
                    Register
                  </NavBox>

                  <NavBox
                    sx={{ fontFamily: "Oswald", textTransform: "capitalize" }}
                    variant="h6"
                  >
                    Login
                  </NavBox>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Backdrop>
      </Grid>
    </Grid>
  ) : (
    // else this one
    <>
      <Grid
        item
        container
        component="nav"
        sx={{
            width: "99vw",
          height: !matches2 ? 40 : 90,
          bgcolor: 'rgb(164,0,0)',
        //   bgcolor: deepOrange["A700"],
        }}
      >
        <Grid
          item
          container
          justifyContent={"center"}
          alignItems="center"
          sx={{ height: "90%", width: "100%", bgcolor: "#000", color: "white" }}
                  >
                      {/*Implemented nested itenary operators zb:   ml: !matches2 ? (special ? -29 : -12.85) : "",
                      if not matches2 then special? if yes set the value to -29 else -12.85
                      if matches2 leave the value unset
                      there are plenty of such definitions but they all follow thesame logic */}
          <Grid
            item
            container
            maxWidth={!matches2 ? "65%" : "100%"}
            justifyContent={"center"}
            alignItems="center"
            columnSpacing={!matches2 ? (special ? "11vw" : "8.3vw") : ""}
            sx={{
              // border: "1px solid white",
              display: "grid",
              gridTemplateColumns: !matches2
                ? "repeat(11, 1fr)"
                : "repeat(6, 1fr)",
              gridTemplateRows: !matches2 ? "auto" : "repeat(2,1fr)",
              gridTemplateAreas: !matches2
                ? `"leftNav leftNav leftNav leftNav . . . . . . rightNav"`
                : `". leftNav leftNav leftNav leftNav . "
                        ". . rightNav rightNav . ."`,
              pt: 0,
              mt: -1,
              width: !matches2 ? "20em" : "35em",
              ml: !matches2 ? (special ? -29 : -12.85) : "",
            }}
            height={!matches2 ? "85%" : "50%"}
          >
            <Grid
              item
              sx={{ gridArea: "leftNav", width: matches2 ? "24em" : 80 }}
              px={1}
              pl={0}
              alignItems="center"
              
            >

              <Stack
                spacing={1}
                divider={
                  <Box>
                    <Divider
                      orientation="vertical"
                      color="grey"
                      sx={{ height: "16px", mt: "7px", bgcolor: "" }}
                      component={"hr"}
                    />
                  </Box>
                }
                direction={{ xs: "column", sm: "row" }}
                sx={{ width: !matches2 ? "67em" : "auto" }}
              >
                <NavBox
                  variant={!matches2 ? "subtitle1" : "body2"}
                  color={green[500]}
                >
                  full home page
                </NavBox>
                <NavBox variant={!matches2 ? "subtitle1" : "body2"}>
                  top 100
                </NavBox>
                <NavBox variant={!matches2 ? "subtitle1" : "body2"}>
                  trending
                </NavBox>
                <NavBox variant={!matches2 ? "subtitle1" : "body2"}>
                  contact
                </NavBox>
                <NavBox variant={!matches2 ? "subtitle1" : "body2"}>
                  upload
                </NavBox>
              </Stack>
            </Grid>
            <Grid
              item
              sx={{
                gridArea: "rightNav",
                width: !matches2 ? "10" : "12em",
                height: "auto",
                pl: 3.3,
                ml: !matches2 ? "55.2em" : "",
              }}
            >
              <Stack
                spacing={1}
                divider={
                  <Box>
                    <Divider
                      orientation="vertical"
                      color="grey"
                      sx={{ height: "16px", mt: "7px", bgcolor: "" }}
                      component={"hr"}
                    />
                  </Box>
                }
                direction={{ xs: "column", sm: "row" }}
              >
                <NavBox variant="subtitle1">Register</NavBox>

                <NavBox variant="subtitle1" color={"orangered"}>
                  Login
                </NavBox>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

