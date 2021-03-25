import React from "react";
import "./Header.css";
import { Avatar } from "@material-ui/core";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SearchIcon from "@material-ui/icons/Search";
function Header()
{
  return(<div className="header">
  <img className="header_icon" src="https://www.dgtlnk.com/wp-content/uploads/airbnb_logo_detail.jpg" alt="lorem picsum"></img>
<div className="header_center">

<input type="text" placeholde="Start your Search"/>
<SearchIcon/>
</div>
<div className="header_rightmost">
<p>Become a Host</p>
<LanguageIcon/>
<ExpandMoreIcon/>
<Avatar/>
</div>

    </div>);
}
export default Header;
