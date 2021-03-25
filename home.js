import React from "react";
import "./home.css";
import Banner from "./Banner";
import "./Header.css";
import Card from "./Card";
import Travel from "./Travel.js";
import Groundbanner from "./Groundbanner";
function Home()
{
  return(<div className="home">
<Banner/>
<div className="sectionname">
<Card src="https://a0.muscache.com/im/pictures/b948e0e0-c78f-4895-b433-c90401019981.jpg?im_q=medq&im_w=720" title="Kodaikanal" duration="8-hour drive"/>
<Card src="https://a0.muscache.com/im/pictures/a7fe39da-3e57-44df-a744-9a73e482802d.jpg?im_q=medq&im_w=720" title="Ooty" duration="9-hour drive"/>
<Card src="https://a0.muscache.com/im/pictures/be4d3ba5-08d7-4afe-95a7-f2da6453886a.jpg?im_q=medq&im_w=720" title="Munnar" duration="8-hour drive"/>
<Card src="https://a0.muscache.com/im/pictures/bd549da5-ecdd-4642-9a4c-4943c9c8cf28.jpg?im_q=medq&im_w=720"  title="Valparai" duration="5-hour drive"/>

</div>
<div className="sectionname">
<Card src="https://a0.muscache.com/im/pictures/0445ba36-5684-4cca-9cb1-418a0ffdcd2f.jpg?im_q=medq&im_w=720" title="Kapetta" duration="6-hour drive"/>
<Card src="https://a0.muscache.com/im/pictures/7d80bee1-a510-4950-a1a0-07a4fb25ec2e.jpg?im_q=medq&im_w=720" title="Kumbakonam" duration="4-hour drive"/>
<Card src="https://a0.muscache.com/im/pictures/e8d3d6de-40b1-4341-89f2-afb2a1a4f71f.jpg?im_q=medq&im_w=720" title="Kotagiri" duration="6.5-hour drive"/>
<Card src= "https://a0.muscache.com/im/pictures/b0097a48-c16c-4869-84df-9bbe7d4e9eb0.jpg?im_q=medq&im_w=720" title="Pondicherry" duration="2-hour drive"/>
</div>
<div className="sectionname">
<Travel src="https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg?im_w=720" title="Pet Friendly" />
<Travel src="https://a0.muscache.com/im/pictures/a596c528-a2e9-4417-9bbe-ceb68b2f6b9c.jpg?im_w=720" title="Cabin Cottages" />
<Travel src="https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=720" title="Unique Getaways" />
<Travel src="https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=720" title="Live anywhere" />
</div>
<div className="footer">
<Groundbanner/>
</div>
    </div>

  );
}
export default Home;
