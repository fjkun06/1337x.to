import { Grid,Fab } from "@mui/material";
import { Footer } from "./Footer";
import "./body.css";
import { Breakpoints } from "./customBreakpoints";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


export function Body() {
  const [matches, matches2, special] = Breakpoints();

 const element = document.querySelector('body')
    function scrollToTop() {
        // element.scrollIntoView(true);
        element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
      }
    
  // console.log(wallpaper) size:"large"
  return (
    <Grid
      container
      component="section"
      sx={{
        width: "99vw",
        height: !matches ? "95.75vh" : "100vh",
        color: "white",
        fontSize: "40px",
        position: "relative",
      }}
    >
    {/* <Grid item container sx={{height:"50%",border:"3px solid yellow"}}>I own this part</Grid> */}
      {/* <Grid item container component={"img"} src={wallpaper} alt="wallpaper"/> */}
      <Grid item sx={{ zIndex: "tooltip", position: "absolute", top: "27.4vh", position:"relative",ml:-2.5}}>
        {" "}
        <Fab aria-label="scroll back to top" sx={{backgroundColor:"rgb(104,0,0)",'&:hover':{backgroundColor:"rgb(104,0,0)"},borderRadius:"50%",width:"36.3px",height:"35px",zIndex:'tooltip'}} onClick={ scrollToTop}>
                  <KeyboardArrowUpIcon sx={{ position: "absolute", top: -15, color: "white", fontSize: "35px", '&:active': { color: "white" }, width: "30px", height: "50px", borderRadius: "15px" }} />
        </Fab>
      </Grid>
      <Grid item sx={{ zIndex: "tooltip", position: "absolute", top: "76.5vh" }}>
        <Footer />
      </Grid>
    </Grid>
  );
}
