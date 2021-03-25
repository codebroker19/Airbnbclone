import React from "react";
import "./Travel.css";
function Travel({src,title})
{
  return(<div className="travel">
  
<img src={src} alt=""/>
<div>
<h3 className="descp">{title}</h3>
</div>
    </div>);
}
export default Travel;
