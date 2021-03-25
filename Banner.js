import React, {useState} from "react";
import"./Banner.css";
import  Search from "./Search";
import { Button } from "@material-ui/core";
function Banner()
{
  const [showsearch,setshowsearch]=useState(false);
  return(
    <div className="banner">
    <div className="bannersearch">

{showsearch&&<Search/>}
<div className="banner__search">
<Button onClick={()=>setshowsearch(!showsearch)} style={{color:"#ff7779"}} className="banner__searchbutton" variant="outlined">Holiday Dates</Button>

</div>
    <h1>Made possible by Hosts</h1>

</div>

    </div>
  );
}
export default Banner;
