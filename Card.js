import React from "react";
import "./Card.css";
function Card({src,title,duration})
{

  return(

    <div class="heading">
    <h2><span>Explore Nearby</span></h2>
<div className="card">
<img src={src} alt=""/>
<div className="cardinfo">
<h3>{title}</h3>
<h4> {duration}</h4>
</div>
</div>
    </div>);
}
export default Card;
