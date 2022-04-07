import { Fab, Grid, Stack, Typography,Avatar } from "@mui/material";
// import AddIcon from "@mui/icons-material/Add";
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import styled from "@emotion/styled";
import { grey } from "@mui/material/colors";

export function Footer() {

//   const FootTypography = styled(Typography)({  });

    
    const GreyFootTypography = styled(Typography)({
        fontFamily: "Oswald", fontWeight: 300, height: 10,
      letterSpacing: "-1.3px",'&:hover':{color:"white",cursor:"pointer"},fontSize:"17.5px"
    });

   


  return (
    <Grid
          container
          component="footer"
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{
              width: "99vw",
            //   display:"none",
              ml:-1,
            //   bgcolor: "green",
              bgcolor: "black",
              height: "15.75vh",
            //   mb: 0,
              color: "white",
              gridTemplateRows: "repeat(3,1fr)",
              gridTemplateColumns: "repeat(1,1fr)",
              borderTop: "1px solid rgb(104,0,0)",
              gridTemplateAreas: `"Fab"
                             "Link"
                             "Age"`,transition:"all 0.5s ease"
          }}
        //   gap={1}
    >
      <Grid
        item
        container
        alignItems="center"
        justifyContent="center"
        sx={{
        //   border: "1px solid yellow",
          width: "100%",
          gridArea: "Fab",mt:-4.5,
          height: "70px",
          // gridRow: "1/2"
        }}
      >
        <Fab
          variant="extended" disableRipple
        //   size="large"
          aria-label="add"
          sx={{ width: "28.75em", fontFamily: "Oswald",height:"36px",bgcolor:'#313131','&:hover':{bgcolor:'#313131'}, ml:4.65,border:"0.5px solid grey"}}
        >
          <Avatar aria-label="add"  sx={{ml:-5,bgcolor:"orange",'&:hover':{bgcolor:"orange"},width:41.5,height:41.5,border:"1.3px solid white" }}
        >
                      <CurrencyBitcoinIcon sx={{cursor:"text",color:"black",fontSize:"23px",}} />
          </Avatar>
          <Typography component={"span"} sx={{cursor:"text",textTransform:"capitalize",pl:"10px",fontFamily: "Oswald",color:"white",fontSize:"17px",}}>
            Bitcoin Donate:{" "}
            <Typography variant="body1" component={"span"} sx={{cursor:"pointer",'&:hover':{color:"orangered"},fontFamily: "Oswald",color:"white",}}>
              3Q1337xL2i6jXrXqZ5aMfhN4wp366GQc44
            </Typography>
          </Typography>
        </Fab>
      </Grid>
      <Grid
        item
        container
        alignItems="center"
        justifyContent="center"
        sx={{
        //   border: "1px solid yellow",
          height: "35px",
          gridArea: "Link",
          //   gridRow: "2/3"
        }}
          ><Stack direction="row" spacing={3} sx={{
              pt: 0.35,
                //   border: "1px solid red",
                  height: "2.2rem"
          }}>
               <GreyFootTypography component={"div"} sx={{ color: "gray"}}>
          HOME
        </GreyFootTypography>    
               <GreyFootTypography component={"div"} sx={{color:"white",'&:hover':{color:"white",cursor:"pointer",}}}>
          FULL HOME PAGE
        </GreyFootTypography>    
               <GreyFootTypography component={"div"} sx={{ color: "gray"}}>
          DMCA
        </GreyFootTypography>    
               <GreyFootTypography component={"div"} sx={{ color: "gray"}}>
          CONTACT
        </GreyFootTypography>    
      </Stack>
       
      </Grid>
      <Grid
        item
        container
        alignItems="center"
        justifyContent="center"
        sx={{
        //   border: "1px solid yellow",
          height: "35px",
          gridArea: "Age",mb:-4
          //   gridRow: "3/4"
        }}
      >
        <Typography variant="overline" component={"div"} sx={{pl:"15px"}}>
          1337x 2007 - 2022
        </Typography>
      </Grid>
    </Grid>
  );
}
