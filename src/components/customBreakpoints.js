import { useMediaQuery } from "@mui/material";

export function Breakpoints() {
    //defining custom breakpoints with useMediaQuery hook
  const matches = useMediaQuery("(min-width:200px) and (max-width:767px)");
  const matches2 = useMediaQuery("(min-width:768px) and (max-width:1129px)");
    const special = useMediaQuery("(min-width:1260px)");
    
    return [matches,matches2,special]
}
  
