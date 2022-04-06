import {
  Divider,
  Grid,
  Stack,
  Box,
  Typography,
  useMediaQuery,
  Fade,
  Modal,
  Backdrop,
} from "@mui/material";
import { deepOrange, green } from "@mui/material/colors";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";
import { experimental_sx as sx } from "@mui/system";
import "../fonts/Oswald/Oswald-Regular.ttf";
import "./nav.css";
import { useState } from "react";

export function Navbar() {
//   const [show, setShow] = useState("none");
//   const [fade, setFade] = useState(false);

  const [open, setOpen] = useState(false);
  const opener = () => setOpen(true);
  // const closer = () => console.log("hellovvvv");
  const closer = () => setOpen(false);

  // console.log(OswaldRegularTff)
  const matches = useMediaQuery("(min-width:200px) and (max-width:767px)");
  const matches2 = useMediaQuery("(min-width:768px) and (max-width:1129px)");
  const special = useMediaQuery("(min-width:1260px)");
  console.log(matches2);

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

  return matches ? (
    <Grid container p={2} bgcolor="orangered">
      <Grid item container justifyContent="flex-end" pt={1.3}>
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
        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 ,bgcolor: "rgba(0,0,0,0.92)",
}}
        open={open}
            //   onClick={handleClose}
              transitionDuration={700}
      >
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
                    <NavBox sx={{ fontFamily: "Oswald",textTransform:"capitalize" }} variant="h6">
                      Register
                    </NavBox>

                    <NavBox sx={{ fontFamily: "Oswald" ,textTransform:"capitalize"}} variant="h6">
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
    // </Grid>
    <>
      <Grid
        item
        container
        component="nav"
        sx={{ width: "100vw", height: !matches2? 40 : 90, bgcolor: deepOrange["A700"] }}
      >
        <Grid
          item
          container
          justifyContent={"center"}
          alignItems="center"
          sx={{ height: "90%", width: "100%", bgcolor: "#000", color: "white",}}
        >
          <Grid
                          item
                          container
                          maxWidth={!matches2 ? "65%" : "100%"}
                          justifyContent={"center"}
                          alignItems="center" columnSpacing={!matches2? special? "11vw":'8.3vw' : ""}
                          sx={{
                              // border: "1px solid white",
                              display: "grid",
                              gridTemplateColumns: !matches2 ? "repeat(11, 1fr)" : "repeat(6, 1fr)",
                              gridTemplateRows: !matches2 ? "auto" : "repeat(2,1fr)",
                              gridTemplateAreas: !matches2
                                  ? `"leftNav leftNav leftNav leftNav . . . . . . rightNav"`
                                  : `". leftNav leftNav leftNav leftNav . "
                        ". . rightNav rightNav . ."`,
                              pt: 0,  mt: -1, width: !matches2 ? "20em" : "35em", ml: !matches2? special? -29 : -12.85 : "",
                          }}
                          height={!matches2 ? "85%" : "50%"}
          >
            <Grid
              item
              sx={{ gridArea: "leftNav",width: matches2? "24em" : 80}}
              px={1}
              pl={0} 
                              alignItems="center"
                            //   sx={{border:"3px solid yellow"}}
            //   justifyItems="center"
            >
              {/* <Stack spacing={1} divider={<div style={{height: "5px",paddingTop:"5px"}}></div>} direction={{xs:"column",sm:"row"}} > */}
              {/* <Stack spacing={1} divider={<Divider orientation="vertical" color="grey" sx={{ height: "5px", paddingTop: "5px" }} flexItem component={"hr"} />} direction={{ xs: "column", sm: "row" }} > */}

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
                                  sx={{width: !matches2? "67em" : "auto" }}
              >
                <NavBox variant={!matches2? "subtitle1" : "body2"} color={green[500]}>
                  full home page
                </NavBox>
                <NavBox variant={!matches2? "subtitle1" : "body2"}>top 100</NavBox>
                <NavBox variant={!matches2? "subtitle1" : "body2"}>trending</NavBox>
                <NavBox variant={!matches2? "subtitle1" : "body2"}>contact</NavBox>
                <NavBox variant={!matches2? "subtitle1" : "body2"}>upload</NavBox>
              </Stack>
            </Grid>
            <Grid item sx={{ gridArea: "rightNav", width: !matches2? "10":"12em",height:"auto",pl:3.3,ml:!matches2? "55.2em":""}}>
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

const nano = true
const lalo = true
const tano = false
const talo = false

// console.log(!nano? tano? "true nt" : "false nt" : lalo? "true nl" : "false nl")